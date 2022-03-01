import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PaxContactDetails() {
const [name, setName] = useState("");
const [sex, setSex] = useState("");
const [age, setAge] = useState(0);
const [mobileNumber, setMobileNumber] = useState(0);
const [email, setEmail] = useState("");
const [pinCode, setPinCode] = useState("");
const [boarding, setBoarding] = useState("");
const [drop, setDrop]= useState("");
const [time, setTime] = useState("");
const [passengerDetails, setPassengerDetails] = useState([])


	useEffect(() => {



}, []);

var data =[]
const handleSubmit=()=>{

var passenger ={
name : name,
sex : sex,
age: age,
mobileNumber : mobileNumber,
email: email,
pinCode: pinCode,
boarding: boarding,
drop: drop,
time: time,

};
data.push(passenger)
setPassengerDetails(data)
console.log('data',data)
console.log(passenger)
}

	return (
		<div>
			<div>
				<h1>PAX Details</h1>
				<div>
					<legend className="legend-name">Name</legend>
					<input type="text" className="in-field" required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
/>

					<legend className="legend-name">Sex</legend>
					<select
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
>
						<option value="" disabled>
							Select
						</option>
						<option value="Female">Female</option>
						<option value="Male">Male</option>
					</select>

					<legend className="legend-name">Age</legend>
					<input type="number" className="in-field" required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
 />

					<h4>Add Passenger</h4>
				</div>
			</div>

			<div>Contact Details</div>
			<div>
				<input type="checkbox" required />
				<h4>Fill my agency contact information</h4>

				<legend className="legend-name">Mobile Number</legend>
				<input type="text" className="in-field" required 
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
 />
				<legend className="legend-name">Email ID</legend>
				<input type="text" className="in-field" required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
/>
				<legend className="legend-name">Pin Code</legend>
				<input type="text" className="in-field" required 
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
/>
				<legend className="legend-name">Boarding At</legend>
				<input type="text" className="in-field" required 
                  value={boarding}
                  onChange={(e) => setBoarding(e.target.value)}
/>
				<legend className="legend-name">Drop At</legend>
				<input type="text" className="in-field" required 
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
/>
				<legend className="legend-name">Time</legend>
				<input type="text" className="in-field" required 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
/>
			</div>

			<div>
				<button className="btn-search" title="Quick Book" onClick={handleSubmit}>
					<span className="btn-text">Quick Book</span>
				</button>
			</div>
		</div>
	);
}

export default PaxContactDetails;
