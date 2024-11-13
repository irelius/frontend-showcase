import "./Weather.css";

import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import weatherLoadingAnimation from "../../assets/lottie/weather-loading.json";

function Weather() {
	const weatherApi = import.meta.env.VITE_WEATHER_API;
	const savedLocation = localStorage.getItem("savedLocation"); // either something or null
	const giveLocation = "Get Your Location";

	const [locationInput, setLocationInput] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [sendRequest, setSendRequest] = useState(0);
	const [error, setError] = useState({});

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

	return (
		<div>
			<button onClick={() => setSendRequest((prev) => prev + 1)}>Get Weather Data</button>
			<button onClick={(e) => getGeolocation(e)}>{giveLocation}</button>
			<section>
				{/* <input
					type="text"
					placeholder="Provide your location"
					value={locationInput}
					onChange={(e) => setLocationInput(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setLocation(locationInput);
							setLocationProvided((prev) => !prev);
						}
					}}
				/> */}
				<input
					type="text"
					placeholder="Provide your location"
					onChange={(e) => setLocationInput(e.target.value)}
					value={locationInput}
					onKeyUp={(e) => {
						if (e.key === "Enter") {
							setSendRequest((prev) => prev + 1);
						}
					}}
				/>
			</section>
			{weatherData ? (
				<section>
					<aside>Condition: {weatherData.condition.text}</aside>
					<aside>
						<img src={weatherData.condition.icon} />
					</aside>
					<aside>Cloud: {weatherData.cloud}</aside>
					<aside>Temperature: {weatherData.temp_f}</aside>
					<aside>Feels Like: {weatherData.feelslike_f}</aside>
					<aside>UV: {weatherData.uv}</aside>
					<aside>Humidity: {weatherData.humidity}</aside>
				</section>
			) : sendRequest === 0 ? (
				<>request not yet sent</>
			) : (
				<></>
			)}

			{error.code ? (
				// Error section
				<section>
					{error.code === 1006 ? (
						<section>Whoops, looks like the location you provided doesn't exist.</section>
					) : error.code === 1003 ? (
						<section>Whoops, looks like you forgot to provide your location.</section>
					) : (
						<></>
					)}
				</section>
			) : (
				<></>
			)}
		</div>
	);
}

export default Weather;
