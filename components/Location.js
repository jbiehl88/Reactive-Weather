import sunny from "../assets/Sunny.svg"
import cloudy from "../assets/Cloudy.svg"
import rainy from "../assets/Rainy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

function Location({ data, location, setLocation }) {
	const found = data.find(({ city }) => city == location)
	console.log(found)
	return (
		<>
			{found == undefined ? (
				"Location not found"
			) : (
				<div className="card">
					<div className="img-container">
						<img
							className="card-img-top"
							src={found.forecast == "Sunny" ? sunny : found.forecast == "Cloudy" ? cloudy : found.forecast == "Rainy" ? rainy : partlyCloudy}
							alt="Card image cap"
							id="icon"
						/>
					</div>
					<div className="card-body">
						<h3 className="card-title">{found.city}</h3>
						<h5 className="card-text">{found.temperature}</h5>
						<h5 className="card-text">{found.forecast}</h5>
					</div>
				</div>
			)}
		</>
	)
}

export default Location
