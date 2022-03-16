import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"
import Icon from '../../assets/Icon ionic-md-person-add.svg'
import binIcon from '../../assets/Icon material-delete-forever.svg'


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
			
axios
.post("http://3.109.160.178:8082/api/v1/bus/blockticket", {
				"API Provider Id": 1,
				"Address" : "Test Address",
				"Ages" : "36",
				"Boarding Id" : "11",
				"Boarding Point Details" : "Zaheerabad",
				"Bus Type Name" : "SeaterSleeper AC Espano Divo Air Suspension (2+2)",
				"Cancellation Policy" : "6:-1:100:0;24:-1:30:0;0:48:15:0",
				"City" : "Hyderabad",
				"Convenience Fee": "0",
				"Departure Time": "02:00 PM",	
				"Destination Id": "109",
				"Destination Name": "Bangalore",
				"Display Name": "Rise Travels one",
				"Dropping Id": "268",
				"Dropping Point Details": "VRL Work Shop",
				"EmailId": "test@gmail.com",
				"Fares": "400",
				"Genders": "M",
				"IdCardIssuedBy": "Gov",
				"IdCardNo": "142341789",
				"IdCardType": "PAN_CARD",
				"Journey Date": "05-03-2022",
				"MobileNo": "9999999999",
				"Names": "Guru",
				"No of Seats": "2",
				"Operator": "Orange Travels",
				"Partial Cancellation Allowed": true,
				"PostalCode": "500035",
				"Provider": "+rfVawweNEABIDWJVZMKFA==",
				"SeatNos": "2",
				"ServiceCharge": "0.00",
				"Servicetax": "60",
				"Source Id": "100",
				"Source Name" : "Hyderabad",
				"State": "Telangana",
				"Titles": "Mr",
				"Trip Id": "18",
				"Trip Type": "ONE_WAY",
				"UserType": 5,
				"Travellers" : [
			        {
					"Title": "Mr",
					"Traveller Name": "Manindra Kumar Tiwary",
					"Sex": "M",
					"Age": 46,
					"Seat No": 1,
					"Fare": 450,
					"Service Tax": 60,
					"Service Charge" : 0.00
				},
				{
					"Title": "Ms",
					"Traveller Name": "Nisah Tiwary",
					"Sex": "F",
					"Age": 40,
					"Seat No": 2,
					"Fare": 450,
					"Service Tax": 60,
					"Service Charge" : 0.00
				}
			],
			"Traveller Contact Information": 
				{
					"Mobile Number": "8877446633",
					"Email": "manindra@homzhub.com",
					"Send SMS": true,
					"Send Email": false,
					"Name Title": "Mr",
					"Name": "Manindra",
					"Address": "Some Address",
					"Town": "Some Town",
					"State": "Telangana",
					"Pin Code": "8888888",
					"ID Card No": "ABCD",
					"ID Card Type": "PAN_CARD",
					"ID Card Issued By": "Gov",
				}

			})
			.then((response) => {
				console.log("post reponse", response.data);
							});


 }, [passengerDetails]);




const handleSubmit= async()=>{
var data =passengerDetails

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
await  data.push(passenger)
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
						<input type="number" placeholder="                             Years" className="in-field" required
style={{width : 150}}
                  onChange={(e) => setAge(e.target.value)}
 />
					</div>
					<div className="details" style={{marginTop: 5}}>
<img src={Icon} style={{marginRight: 15}} />
						<h4 style={{font: 'normal normal 600 14px/19px Open Sans', color: '#B5B5B5', fontSize: 14}}
onClick={handleSubmit}
>Add Passenger</h4>
					</div>

				</div>
<legend className="legend-name"
style={{
top: 312,
left: 208,
width: 268,
height: 19,
font: 'Open Sans',
letterSpacing: 0,
color: '#483191',
opacity: 1,
marginLeft: 30
}}
>Passengers</legend>

{
passengerDetails.map((key)=>(

<div style={{display : 'flex'}}>
{console.log(key.name,'pas')}
<h4
style={{
marginLeft: 30,
color: '#454545',
font: 'Open Sans',
wordSpacing:5

}}
>1. {key.name} <span></span> {key.sex}, {key.age} Years </h4>
<img src={binIcon}  style={{marginLeft:50}}/>
</div>


))

}
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

				
			</div>

			

		</div>
<div  style={{
marginTop:0,
left: 181,
height: 40}}>
					<button title="Quick Book" stye={{width:'max-content' }}>
						<span className="btn-text">Quick Book</span>
					</button>
				</div>
</div>

	);
}

export default PaxContactDetails;
