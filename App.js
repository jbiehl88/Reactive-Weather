import React from "react"
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard"
import Location from "./components/Location"
import Form from "./components/Form"
import { useState } from "react"

const cities = require("./data")

function App() {
	const [location, setLocation] = useState(cities[0].city)

	return (
		<>
			<h1 className="title">REACTIVE WEATHER</h1>
			<h3 className="subtitle">Up to the minute weather news</h3>
			<Form location={location} setLocation={setLocation} />
			<div className="app">
				<Location data={cities} location={location} setLocation={setLocation} />
			</div>

			<div className="app">
				{cities.map((card) => (
					<WeatherCard data={card} />
				))}
			</div>
		</>
	)
}

export default App
