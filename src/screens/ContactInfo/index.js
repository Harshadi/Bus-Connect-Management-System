import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ContactInfo() {

	useEffect(() => {



}, []);


	return (
		<div>
			<div>
<h2>Contact Information</h2>
<input type="checkbox" required />
<h4>Fill my agency contact information</h4>
</div>

<div>
<div>
  <legend className="legend-name">Mobile Number OR Email</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />

 <button
              className="btn-search"
              title="Search Buses"
            
            >
              <span className="btn-text">Get</span>
            </button>


 <input
                type="checkbox"
                required
              />

<h4>Send SMS</h4>

 <input
                type="checkbox"
                required
              />

<h4>Send Email</h4>


</div>

<div>
<legend className="legend-name">Name</legend>
<select>
						<option value="" selected 
disabled>
							  
						</option>
						<option value="Mr">Mr</option>
						<option value="Ms">Ms</option>
						<option value="Mrs">Mrs</option>
					</select>

              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />

<legend className="legend-name">Address</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />


</div>
<div>
<legend className="legend-name">Town</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />
<legend className="legend-name">State</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />
<legend className="legend-name">PIN Code</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
 />

</div>

</div>


<div>

<div>
<h3>Transport</h3>
<h4>Vishnu Travels</h4>
</div>

<div>
<h3>From</h3>
<h4>Source City</h4>
</div>

<div>
<h3>To</h3>
<h4>Destination City</h4>
</div>

<div>
<h3>Travel Date</h3>
<h4>14 Februrary 2022</h4>
</div>

<div>
<h3>Seat Type</h3>
<h4>Lower Berth</h4>
</div>

<div>
<h3>Route Name</h3>
<h4>New Delhi - Midstop - Jaisalmer</h4>
</div>

</div>
		</div>
	);
}

export default ContactInfo;
