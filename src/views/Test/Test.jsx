import "./Test.css";

import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import weatherLoadingAnimation from "../../assets/lottie/weather-loading.json";

function Test() {
	const weatherApi = import.meta.env.VITE_WEATHER_API;
	const savedLocation = localStorage.getItem("savedLocation") || "null";

	// location from geolocation request
	const [location, setLocation] = useState("");

	// location from input field
	const [locationInput, setLocationInput] = useState("");

	// trigger variable to know when to send request to fetch weather data
	const [locationProvided, setLocationProvided] = useState(false);

	const [weatherData, setWeatherData] = useState(null);
	const [error, setError] = useState({});

	// method to get data from weather api
	const fetchWeather = async () => {
		// Send request using the params provided
		setLocation(locationInput);

		const data = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=${weatherApi}&q=${location}&aqi=no`
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

	// get user's current location, returns lat and lng
	const getCurrentPosition = async () => {
		const success = async (position) => {
			setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
			setLocationProvided((prev) => !prev);
		};

		const fail = () => {
			setLocation("");
		};

		const permission = await navigator.permissions.query({ name: "geolocation" });

		if (permission.state === "denied") {
			window.alert(
				`Looks like we don't have permission to get your location. Please reset the permissions and try again.\n\nAlternatively, manually input your location (e.g. city, zip code).
                `
			);
		} else {
			// ask for permission to get user's current location
			navigator.geolocation.getCurrentPosition(success, fail);
		}
	};

	useEffect(() => {
		const setupStorage = async () => {
			const permission = await navigator.permissions.query({ name: "geolocation" });

			if (permission.state === "prompt") {
				localStorage.setItem("savedLocation", "null");
				getCurrentPosition();
			} else if (permission.state === "granted") {
				if (savedLocation === "null") {
					getCurrentPosition();
				} else {
					setLocation(savedLocation);
				}
				setLocationProvided((prev) => !prev);
			}
		};

		setupStorage();
	}, []);

	useEffect(() => {
		fetchWeather();
	}, [locationProvided]);

	return (
		<div>
			<button
				onClick={() => {
					setLocation(locationInput);
					setLocationProvided((prev) => !prev);
				}}
			>
				Get Weather Data
			</button>
			<button onClick={() => getCurrentPosition()}>Get Your Location</button>
			<section>
				<input
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
			) : (
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
			)}
		</div>
	);
}

export default Test;
