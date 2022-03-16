import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './style.css'

function ReprintScreen({ navigation }) {
  

  useEffect(() => {
   
  }, []);

  return (
    <div className="outer-box">
      <div className="top-bar"></div>
      <div className="nav-bar"></div>
<div style={{textAlign: 'center'}}>
        <h1 className="top-heading" style={{width:300 }}>Bus Reprint / Cancel</h1>
</div>

      <div className="main-container">
        <div className="sub-container">
          <div className="input-container">
            <div className="input-div d1">
              <legend className="legend-name">Transaction ID</legend>
              <input
                className="in-field"
                required
                list="browsers"
                name="myBrowser"
              />
                        </div>

                    <div className="button-container">
            <button
              className="searchBtn"
              title="Search Buses"
            >
              <span className="btn-text">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}



export default ReprintScreen;
