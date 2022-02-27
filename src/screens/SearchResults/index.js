import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import arrow from "../../assets/Icon feather-arrow-right.svg";
import calendar from "../../assets/Icon awesome-calendar-alt.svg";
import { useLocation } from "react-router-dom";

function SearchResults() {
	const location = useLocation();
	const [text, setText] = useState("");
	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");
	const [departureDate, setDepartureDate] = useState("");
	const [passenger, setPassenger] = useState("");
	const [db, setDb] = useState([]);
	const [apiInitial, setApiInitial] = useState("");
	const [originKey, setOriginKey] = useState("");
	const [destinationKey, setDestinationKey] = useState("");
	const [departure, setDeparture] = useState();
	const [noOfPassengers, setNoOfPassengers] = useState(0);

	const [arrivalTime, setArrivalTime] = useState("");
	const [availableSeats, setAvailableSeats] = useState("");
	const [busType, setBusType] = useState("");
	const [cancellationPolicy, setCancellationPolicy] = useState("");
	const [departureTime, setDepartureTime] = useState("");
	const [displayName, setDisplayName] = useState("");
	const [duration, setDuration] = useState("");
	const [fares, setFares] = useState("");
	const [tripID, setTripID] = useState("");
	const [busesAvailable, setBusesAvailable] = useState("");
	const [busDetails, setBusDetails] = useState([]);

	useEffect(() => {
		console.log(location.state);
		setOrigin(location.state.origin);
		setDestination(location.state.destination);
		setOriginKey(location.state.originKey);
		setDestinationKey(location.state.destinationKey);
		setDeparture(location.state.departure);
		setNoOfPassengers(location.state.noOfPassengers);

		console.log("o", originKey);
		console.log("d", destinationKey);

		axios
			.post("http://3.109.160.178:8082/api/v1/bus/searchbus", {
				retailerId: 1,
				origin: originKey,
				destination: destinationKey,
				departure: "05-03-2022",
				noOfPassengers: noOfPassengers,
			})
			.then((response) => {
				console.log("post reponse", response.data);
				setBusesAvailable(
					response.data.Responses[0].Journey.AvailableTrips.length,
				);
				setBusDetails(response.data.Responses[0].Journey.AvailableTrips);
				console.log(busesAvailable);
			});
	}, [originKey, destinationKey]);

	const onChangeText = () => {
		console.log("text enter");
	};

	return (
		<div>
			<div>
				<div>
					<div>
						<h1>{location.state.origin}</h1>
						<img src={arrow} />
						<h1>{location.state.destination}</h1>

						<img src={calendar} />

						<h1>Modify Search</h1>
						<h1>Bus Matrix</h1>
						<h1>Action</h1>
					</div>
				</div>
			</div>
			<div>
				<table width="100%">
					<tr>
						<th>Trip</th>
						<th>00-04</th>
						<th>04-08</th>
						<th>08-12</th>
						<th>12-16</th>
						<th>16-20</th>
						<th>20-00</th>
					</tr>
					<tr>
						<td style={{ textAlign: "center" }}>Reset</td>
						<td style={{ textAlign: "center" }}>N/A</td>
						<td style={{ textAlign: "center" }}>N/A</td>
						<td style={{ textAlign: "center" }}>N/A</td>
						<td style={{ textAlign: "center" }}>N/A</td>
						<td style={{ textAlign: "center" }}>N/A</td>
						<td style={{ textAlign: "center" }}>N/A</td>
					</tr>
				</table>

				<div>
					<h2>{busesAvailable} buses available</h2>

					<h2>Previous Day</h2>
					<h2>Next Day</h2>
				</div>

				<div>
					<table width="100%">
						<tr>
							<td>Transport Name</td>
							<td>Departure</td>
							<td>Arrival</td>
							<td>Boarding</td>
							<td>Drop</td>
							<td>Fare</td>
							<td>Bus Type</td>
							<td>Reset All</td>
							<td>
								<input type="checkbox" />
							</td>
						</tr>
						{busDetails.map((busDetail) => (
							<tr>
								<td>
									{busDetail.displayName} <br />
									{busDetail.availableSeats}
								</td>
								<td>
									{busDetail.DepartureTime}
									<br />
									{busDetail.Duration}
								</td>
								<td>{busDetail.ArrivalTime}</td>
								<td></td>
								<td></td>
								<td>{busDetail.fares}</td>
								<td>Select</td>
								<td>Quick Book</td>
								<td>
									<input type="checkbox" />
								</td>
							</tr>
						))}
					</table>
				</div>
			</div>
		</div>
	);
}

export default SearchResults;
