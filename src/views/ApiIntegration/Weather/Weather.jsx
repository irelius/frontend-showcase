import "./Weather.css";

import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import weatherLoadingAnimation from "../../../assets/lottie/weather-loading.json";

function Weather() {
	const weatherApi = import.meta.env.VITE_WEATHER_API;
	const savedLocation = localStorage.getItem("zxzxczxc"); // either something or null
	const giveLocation = "Get Your Location";

	const [locationInput, setLocationInput] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [sendRequest, setSendRequest] = useState(0);
	const [error, setError] = useState({});

	const [unit, setUnit] = useState("f");

	// useEffect to set state variables with a saved location name if valid
	useEffect(() => {
		if (savedLocation) {
			setLocationInput(savedLocation);
			setSendRequest((prev) => prev + 1);
		}
	}, []);

	const getWeather = async () => {
		// Send request using the params provided
		const data = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${weatherApi}&q=${locationInput}&aqi=no`
		).then((res) => res.json());

		if ("error" in data) {
			setError((prev) => ({
				...prev,
				...data.error,
			}));
			setWeatherData(null);
		} else {
			setError({});
			setWeatherData((prev) => ({
				...prev,
				...data.current,
				...data.location,
			}));
			const preppedLocation = `${data.location.name}, ${data.location.region}`;
			localStorage.setItem("savedLocation", preppedLocation);
			setLocationInput(preppedLocation);
		}
	};

	const getGeolocation = async (e) => {
		const success = (position) => {
			setLocationInput(`${position.coords.latitude}, ${position.coords.longitude}`);
			setSendRequest((prev) => prev + 1);
		};
		// if failed, set location as "". No input
		const fail = () => {
			if (e && e.target.innerText === giveLocation) {
				window.alert(
					`Looks like we don't have permission to get your location. Please reset the permissions and try again.\n\nAlternatively, manually input your location (e.g. city, zip code).
                    `
				);
			} else {
				setLocationInput("");
			}
		};

		navigator.geolocation.getCurrentPosition(success, fail);
	};

	// use effect to ask user for geolocation on load
	useEffect(() => {
		getGeolocation();
	}, []);

	// use effect to invoke api request. only triggers if user clicks on get data button or if user gave geolocation permission previously
	useEffect(() => {
		if (sendRequest > 0) {
			getWeather();
		}
	}, [sendRequest]);

	if (weatherData && unit) {
		console.log("booba", weatherData);
	}

	return (
		<div className="weather-container">
			<section className="weather-input-container">
				<section className="weather-input-section">
					<input
						type="text"
						className="weather-input"
						placeholder="Provide your location"
						onChange={(e) => setLocationInput(e.target.value)}
						value={locationInput}
						onKeyUp={(e) => {
							if (e.key === "Enter") {
								setSendRequest((prev) => prev + 1);
							}
						}}
					/>
					<i
						onClick={() => getGeolocation()}
						className="fa-solid fa-magnifying-glass pointer weather-search"
					></i>
				</section>
				<section className="weather-location">
					<i
						onClick={(e) => getGeolocation(e)}
						className="fa-solid fa-location-dot fa-lg pointer"
					></i>
				</section>
			</section>
			{weatherData && unit ? (
				<section className="weather-data">
					<aside className="weather-data-left">
						<img className="weather-data-icon" src={weatherData.condition.icon} />

						<sb>{weatherData.condition.text}</sb>
					</aside>

					<aside className="weather-data-right">
						<section>
							<sb>Temperature:</sb> {weatherData[`temp_${unit}`]} °{unit.toUpperCase()}
						</section>
						<section>
							<sb>Feels Like:</sb> {weatherData[`feelslike_${unit}`]} °{unit.toUpperCase()}
						</section>
						<section>
							<sb>Humidity:</sb> {weatherData.humidity}%
						</section>
						<section>
							<sb>Dewpoint:</sb> {weatherData[`dewpoint_${unit}`]} °{unit.toUpperCase()}
						</section>
						<section>
							<sb>UV:</sb> {weatherData.uv} out of 11
						</section>
					</aside>

					<section className="weather-unit-control">
						<aside onClick={() => setUnit("f")} className={`pointer weather-unit-${unit === "f"}`}>
							°F
						</aside>{" "}
						|{" "}
						<aside onClick={() => setUnit("c")} className={`pointer weather-unit-${unit === "c"}`}>
							°C
						</aside>
					</section>
				</section>
			) : sendRequest === 0 ? (
				<>Collecting weather data...</>
			) : (
				<></>
			)}

			{error.code ? (
				// Error section
				<section className="weather-error-container">
					<section className="weather-error-top">
						<i className="fa-solid fa-circle-exclamation fa-2xl"></i>
						<sb className="weather-whoops">Whoops</sb>
					</section>
					<section className="weather-error-bottom">
						{error.code === 1006
							? `Looks like the location you provided doesn't exist.`
							: `Looks like you forgot to provide your location.`}
					</section>
				</section>
			) : (
				<></>
			)}
		</div>
	);
}

export default Weather;
