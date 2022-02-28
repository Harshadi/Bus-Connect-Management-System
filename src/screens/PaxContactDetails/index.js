import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function PaxContactDetails() {
	useEffect(() => {}, []);

	return (
		<div>
			<div>
				<h1>PAX Details</h1>
				<div>
					<legend className="legend-name">Name</legend>
					<input type="text" className="in-field" required />

					<legend className="legend-name">Sex</legend>
					<select>
						<option value="" disabled>
							Select
						</option>
						<option value="Female">Female</option>
						<option value="Male">Male</option>
					</select>

					<legend className="legend-name">Age</legend>
					<input type="number" className="in-field" required />

					<h4>Add Passenger</h4>
				</div>
			</div>

			<div>Contact Details</div>
			<div>
				<input type="checkbox" required />
				<h4>Fill my agency contact information</h4>

				<legend className="legend-name">Mobile Number</legend>
				<input type="text" className="in-field" required />
				<legend className="legend-name">Email ID</legend>
				<input type="text" className="in-field" required />
				<legend className="legend-name">Pin Code</legend>
				<input type="text" className="in-field" required />
				<legend className="legend-name">Boarding At</legend>
				<input type="text" className="in-field" required />
				<legend className="legend-name">Drop At</legend>
				<input type="text" className="in-field" required />
				<legend className="legend-name">Time</legend>
				<input type="text" className="in-field" required />
			</div>

			<div>
				<button className="btn-search" title="Quick Book">
					<span className="btn-text">Quick Book</span>
				</button>
			</div>
		</div>
	);
}

export default PaxContactDetails;
