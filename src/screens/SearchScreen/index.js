import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchScreen({ navigation }) {
	const [h1, seth1] = useState("");
	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");
	const [departureDate, setDepartureDate] = useState("");
	const [passenger, setPassenger] = useState("");
	const [db, setDb] = useState([]);
	const [apiInitial, setApiInitial] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [isSelected, setSelection] = useState(false);
	const [originKey, setOriginKey] = useState("");
	const [destinationKey, setDestinationKey] = useState("");
	const [departure, setDeparture] = useState();
	const [noOfPassengers, setNoOfPassengers] = useState(0);

	useEffect(() => {
		axios
			.get(`http://3.109.160.178:8082/api/v1/bus/bussource/${apiInitial}`)
			.then((reponse) => {
				setDb(reponse.data.Responses);
			});
	}, [apiInitial]);

	return (
		<div>
			<div></div>
			<div></div>
			<h1>Book Your Bus</h1>{" "}
			<div>
				<div>
					<div>
						<label>
							<h1>Origin </h1>
							<div>
								<input
									required
									list="browsers"
									name="myBrowser"
									onChange={(e) => {
										setOrigin(e.target.value);
										setApiInitial(e.target.value);
										db.map((item) => {
											console.log(item);

											if (item.name == e.target.value) {
												setOriginKey(item.id);
											}
										});
									}}
								/>
							</div>
						</label>

						<datalist id="browsers">
							{db.map((item) => (
								<option value={item.name} key={item.key} />
							))}
						</datalist>
					</div>

					<div>
						<label>
							<h1>Destination</h1>
							<div>
								<input
									list="browsers"
									name="myBrowser"
									onChange={(e) => {
										setDestination(e.target.value);
										setApiInitial(e.target.value);
										db.map((item) => {
											console.log(item);

											if (item.name == e.target.value) {
												setDestinationKey(item.id);
											}
										});
									}}
								/>
							</div>
						</label>

						<datalist id="browsers">
							{db.map((item) => (
								<option value={item.name} key={item.key} />
							))}
						</datalist>
					</div>

					{/*
 <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <h1Field {...params} />}
        />
</ Stack >
 
*/}

					<div>
						<h1>Departure Date</h1>
						<div>
							<DatePicker
								required
								selected={startDate}
								onChange={(date) => setDeparture(date)}
							/>
						</div>
					</div>

					<div>
						<h1>Passenger(s)</h1>
						<div>
							<textinput
								required
								value={noOfPassengers}
								onChange={(e) => setNoOfPassengers(e.target.value)}
							/>
						</div>
					</div>

					<div>
						<checkbox
							required
							value={isSelected}
							onValueChange={setSelection}
							
						/>
						<h1>Regional Transport Corporations</h1>
					</div>
				</div>

				<div>
					<button
						title="Search Buses"
						onPress={() => {
							navigation.navigate("searchResults", {
								params: {
									origin: origin,
									destination: destination,
									originKey: originKey,
									destinationKey: destinationKey,
									departure: departure,
									noOfPassengers: noOfPassengers,
								},
							});
						}}
					></button>
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}

const style = StyleSheet.create({
	outerBox: {
		width: "100%",
		height: "800px",
		margin: "auto",
		backgroundColor: "#F5F5F5",
	},
	topBar: {
		width: "100%",
		height: "89px",
		opacity: "1",
	},
	topNavBar: {
		width: "100%",
		height: "40px",
		backgroundColor: "#483191",
		opacity: "1",
	},
	topHeading: {
		height: "24px",
		h1Align: "center",
		marginTop: "16px",
		marginBottom: "16px",
		fontFamily: "Open Sans",
		fontWeight: "bold",
		fontSize: 18 + "px",
		color: "#483191",
	},
	mainContainer: {
		h1Align: "center",
		backgroundColor: "#ffffff",
		paddingTop: "32px",
		borderRadius: "8px",
		paddingBottom: "32px",
		marginTop: 0,
		marginLeft: "40px",
		marginRight: "40px",
	},

	inputContainer: {
		flex: 1,
		flexDirection: "row",
	},
	label: {
		height: "22px",
		fontFamily: "Open Sans",
		fontWeight: "bold",
		fontSize: 16 + "px",
		color: "#483191",
	},
	inputField1: {
		flex: 1,
		marginLeft: "16px",
		marginRight: "16px",
		h1Align: "left",
		width: "109px",
	},
	inputField2: {
		flex: 1,
		marginLeft: "16px",
		marginRight: "16px",
		h1Align: "left",
		width: "17%",
	},
	inputField3: {
		flex: 1,
		marginLeft: "16px",
		marginRight: "16px",
		h1Align: "left",
		width: "9%",
	},
	inputField4: {
		flex: 1,
		marginLeft: "16px",
		marginRight: "16px",
		h1Align: "left",
		width: "24%",
	},
	input: {
		height: 40,
		borderWidth: 1,
		paddingLeft: 10,
		flex: 1,
	},
	buttonField: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: "36px",
	},
	searchButton: {
		margin: "auto",
		width: "294px",
		height: "40px",
		backgroundColor: "#483191",
		borderRadius: "8px",
	},
});

export default SearchScreen;
