import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
import RupeeIcon from '../../assets/RupeeIcon.svg'

function BookingReview() {

	useEffect(() => {



}, []);


	return (
		<div className="outerBody">
<div className="reviewBookingHeading" style={{textAlign: 'center'}}>
<h3 className="seperator-bars text" >Review Your Booking</h3>
</div>
<div className="busTitleCover">
<h3 className="busTitle">
Bus Information
</h3>		
</div>

<div className="cardTransport">
<div className="felx1" style={{backgroundColor: '#ECE9F5', width: 20+'%'}}>
<h2 className="flex1h2">Transport</h2>
<h2 className="flex1h2">From</h2>
<h2 className="flex1h2">To</h2>
<h2 className="flex1h2">Travel Date</h2>
<h2 className="flex1h2">Seat Type</h2>
<h2 className="flex1h2">Route Name</h2>
</div>


<div>
<h4 className="flex2h2">Vishnu Travels</h4>
<h4 className="flex2h2">New Delhi</h4>
<h4 className="flex2h2">Destination City</h4>
<h4 className="flex2h2">14February 2022</h4>
<h4 className="flex2h2">Lower Berth</h4>
<h4 className="flex2h2">New Delhi - Midstop - Jaisalmer</h4>

</div>
</div>
	

<div className="busTitle" style={{marginTop:30, marginBottom: 20}}>Passenger Information</div>

<div className="tableCover">
<table width="100%" className="tablereview">
<tr className="headingRow">
<td style={{width:100}}>Seat No.</td>
<td >Name</td>
<td>Sex</td>
<td>Age</td>
<td style={{width:100}}>Boarding At</td>
<td style={{width:120}}>Boarding Time</td>
<td style={{width:100}}>Drop At</td>
<td style={{width:100}}>Drop Time</td>
</tr>

<tr className="dataRow">
<td>3L</td>
<td>Vidhya Sharma</td>
<td >F</td>
<td>25 Y</td>
<td >Conought Place, New Delhi</td>
<td>8:00 PM</td>
<td >Connought Place, New Delhi</td>
<td>8:00 PM</td>
</tr>
</table>
</div>


<div className="proceedFlex">
<h3>GST Details</h3>
<h4>N/A</h4>

<h3>Total Ticket Cost</h3>
<img src={RupeeIcon} />
<h4 style={{fontWeight: 'bold', marginLeft:7}}>2400.00</h4>

<div style={{marginLeft:400}}>
<button className="cancelBtn" >
              <span className="val-tg-bt-txt">x  Cancel</span>
            </button>


<button className="proceedBtn">
                        <span className="proceedText">Proceed to Pay</span>
                      </button>
</div>
</div>
		</div>
	);
}

export default BookingReview;
