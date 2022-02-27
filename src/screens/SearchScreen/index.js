import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import Stack from "@mui/material/Stack";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";


function SearchScreen({ navigation }) {
  const navigate = useNavigate();
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
    <div className="outer-box">
      <div className="top-bar"></div>
      <div className="nav-bar"></div>
      <div className="main-container">
        <h1 className="top-heading">Book Your Bus</h1>
        <div className="sub-container">
          <div className="input-container">
            <div className="input-div d1">
              <legend className="legend-name">Origin</legend>
              <input
                className="in-field"
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
              <datalist id="browsers">
                {db.map((item) => (
                  <option value={item.name} key={item.key} />
                ))}
              </datalist>
            </div>

            <div className="input-div d2">
              <label className="legend-name">Destination</label>
              <input
                className="in-field"
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
              <datalist id="browsers">
                {db.map((item) => (
                  <option value={item.name} key={item.key} />
                ))}
              </datalist>
            </div>
            <div className="input-div d3">
              <label className="legend-name">Departure Date</label>
              <div>
                <input
                  className="in-field inp-dt"
                  type="date"
                  required
                  selected={startDate}
                  onChange={(date) => setDeparture(date)}
                />
              </div>
            </div>

            <div className="input-div d4">
              <label className="legend-name">Passenger(s)</label>
              <div>
                <input
                  className="in-field"
                  type="text"
                  required
                  value={noOfPassengers}
                  onChange={(e) => setNoOfPassengers(e.target.value)}
                />
              </div>
            </div>

            <div className="input-div d5">
              <input
                type="checkbox"
                required
                value={isSelected}
                onChange={setSelection}
              />
              <label className="legend-name-2">
                Regional Transport Corporations
              </label>
            </div>
          </div>
          <div className="button-container">
            <button
              className="btn-search"
              title="Search Buses"
              onClick={() => {
							navigate("searchResults", {
								state: {
									origin: origin,
									destination: destination,
									originKey: originKey,
									destinationKey: destinationKey,
									departure: departure,
									noOfPassengers: noOfPassengers,
								},
							});
						}}
            >
              <span className="btn-text">Search Buses</span>
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}



export default SearchScreen;
