import React from "react"
import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

function WeatherCard({ data }) {
	return (
		<div className="card">
			<div className="img-container">
				<img
					className="card-img-top"
					src={data.forecast == "Sunny" ? sunny : data.forecast == "Cloudy" ? cloudy : data.forecast == "Rainy" ? rainy : partlyCloudy}
					alt="Card image cap"
					id="icon"
				/>
			</div>
			<div className="card-body">
				<h3 className="card-title">{data.city}</h3>
				<h5 className="card-text">{data.temperature}</h5>
				<h5 className="card-text">{data.forecast}</h5>
			</div>
		</div>
	)
}

// Export the WeatherCard
export default WeatherCard
