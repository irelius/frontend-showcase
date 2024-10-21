import "./Test.css";

import { fetchWeatherApi } from "openmeteo";
import { useContext, useEffect, useState } from "react";
import { LoadingAnimation } from "../../components";

function Test() {
	// const asdf = {
	// 	"--d": "black",
	// };

	const [responses, setResponses] = useState(null);
	const [load, setLoad] = useState(false);
	const [userLocation, setUserLocation] = useState({
		lat: null,
		long: null,
	});

	const url = "https://api.open-meteo.com/v1/forecast";
	const [params, setParams] = useState({
		latitude: null,
		longitude: null,
		current: null,
		hourly: null,
		daily: null,
	});

	useEffect(() => {
		// get current user's location

		const success = (position) => {
			setUserLocation((prev) => ({
				...prev,
				lat: position.coords.latitude,
				long: position.coords.longitude,
			}));
		};

		const fail = () => {
			setUserLocation((prev) => ({
				...prev,
				lat: 40.7128,
				long: 74.006,
			}));
		};

		navigator.geolocation.getCurrentPosition(success, fail);
	}, []);

	useEffect(() => {
		if (userLocation.lat && userLocation.long) {
			setLoad(true);
		}
		console.log("booba", userLocation);
	}, [userLocation]);

	// useEffect(() => {
	// 	const temp = async () => {
	// 		const data = await fetchWeatherApi(url, params);
	// 		setResponses(data);
	// 		setTest(true);
	// 	};

	// 	temp();
	// }, []);

	// useEffect(() => {
	// 	if (test) {
	// 		// Helper function to form time ranges
	// 		const range = (start, stop, step) =>
	// 			Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

	// 		// Process first location. Add a for-loop for multiple locations or weather models
	// 		const response = responses[0];

	// 		// Attributes for timezone and location
	// 		const utcOffsetSeconds = response.utcOffsetSeconds();
	// 		const timezone = response.timezone();
	// 		const timezoneAbbreviation = response.timezoneAbbreviation();
	// 		const latitude = response.latitude();
	// 		const longitude = response.longitude();

	// 		const current = response.current();
	// 		const hourly = response.hourly();
	// 		const daily = response.daily();

	// 		// Note: The order of weather variables in the URL query and the indices below need to match!
	// 		const weatherData = {
	// 			current: {
	// 				time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
	// 				temperature: current.variables(0).value(), // Current is only 1 value, therefore `.value()`
	// 				weatherCode: current.variables(1).value(),
	// 				windSpeed: current.variables(2).value(),
	// 				windDirection: current.variables(3).value(),
	// 			},
	// 			hourly: {
	// 				time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
	// 					(t) => new Date((t + utcOffsetSeconds) * 1000)
	// 				),
	// 				temperature: hourly.variables(0).valuesArray(), // `.valuesArray()` get an array of floats
	// 				precipitation: hourly.variables(1).valuesArray(),
	// 			},
	// 			daily: {
	// 				time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
	// 					(t) => new Date((t + utcOffsetSeconds) * 1000)
	// 				),
	// 				weatherCode: daily.variables(0).valuesArray(),
	// 				temperatureMax: daily.variables(1).valuesArray(),
	// 				temperatureMin: daily.variables(2).valuesArray(),
	// 			},
	// 		};

	// 		// `weatherData` now contains a simple structure with arrays for datetime and weather data
	// 		for (let i = 0; i < weatherData.daily.time.length; i++) {
	// 			console.log(
	// 				weatherData.daily.time[i].toISOString(),
	// 				weatherData.daily.weatherCode[i],
	// 				weatherData.daily.temperatureMax[i],
	// 				weatherData.daily.temperatureMin[i]
	// 			);
	// 		}
	// 	}
	// }, [test]);

	return load ? (
		<div>
			<label>First name:</label>
			<input type="text" />
			<label>Last name:</label>
			<input type="text" />
			<section>
				<section>{userLocation.lat}</section>
				<section>{userLocation.long}</section>
			</section>
		</div>
	) : (
		<LoadingAnimation />
	);
}

export default Test;
