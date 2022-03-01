import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import Icon from './Icon ionic-md-person-add.svg'

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
<div className="outer-box" >
 <div className="top-bar" style={{backgroundColor: '#F2F2F2'}}></div>
     
		<div className="container"style={{backgroundColor: '#fff'}}>
			<div className="paxDetails ">
				<div className="seperator-bars text">PAX Details</div>
				<div className="details">
					<div>
						<legend className="legend-name">Name</legend>
						<input type="text" className="in-field" required
value={name} style={{width: 450}}
                  onChange={(e) => setName(e.target.value)}
 />
					</div>
					<div>
						<legend className="legend-name">Sex</legend>
						<select
className="in-field"
 value={sex}
style={{width: 150}}
                  onChange={(e) => setSex(e.target.value)}
>
							<option value="" disabled>
								Select
							</option>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
						</select>
					</div>
					<div>
						<legend className="legend-name">Age</legend>
						<input type="number" placeholder="                                Years" className="in-field" required
style={{width : 150}}
                  onChange={(e) => setAge(e.target.value)}
 />
					</div>
					<div className="details" style={{marginTop: 5}}>
<img src={Icon} style={{marginRight: 15}} />
						<h4 style={{font: 'normal normal 600 14px/19px Open Sans', color: '#B5B5B5', fontSize: 14}}>Add Passenger</h4>
					</div>
				</div>
			</div>
			<div className="contact-details">
				<div className="seperator-bars text">Contact Details</div>
				<div className="contact">
					<input className="checkbox" type="checkbox" required />
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

				<div className="btn">
					<button className="btn-search" title="Quick Book">
						<span className="btn-text">Quick Book</span>
					</button>
				</div>
			</div>
			<div className="divider"></div>
		</div>
</div>
	);
}

export default PaxContactDetails;
