import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css';

function PAXCalendar({ navigation }) {
  
  useEffect(() => {
    
 }, []);

  return (
    <div className="outer">
      <div className="top-bar"></div>
      <div className="nav-bar"></div>
<div style={{textAlign: "center"}}>
        <h1 className="top-heading">PAX Calendar</h1>
</div>
      <div className="main-container">
        <div className="sub">
          <div className="flex">
            <div className="flex1" >
              <legend className="monthTitle">Month</legend>
              <select
className="selectField"	
>
							<option value=" " disabled selected>
								 
							</option>
							<option value="January">January</option>
							<option value="February">February</option>
						</select>
              
            </div>

           <div className="flex1" >
              <legend className="monthTitle">Year</legend>
              <select
className="selectField"
>
							<option value=" " disabled selected>
								 
							</option>
							<option value="2022">2022</option>
							<option value="2023">2023</option>
						</select>
              
            </div>
        

 <div className="btnClass">
            <button
              className="searchBtn"
              title="Get Details"
            >
              <span className="btn-text">Get Details</span>
            </button>
          </div>

          </div>
         
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}



export default PAXCalendar;
