import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import arrow from "../../assets/Icon feather-arrow-right.svg";
import calendar from "../../assets/Icon awesome-calendar-alt.svg";
import { useLocation } from "react-router-dom";
import "./style.css";
import avlSeatLogo from "./avl-seat.svg";
import lftLogo from "./left-logo.svg";
import rightLogo from "./right-logo.svg";
function SearchResults() {
  const location = useLocation();
  const [text, setText] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passenger, setPassenger] = useState("");
  const [db, setDb] = useState([]);
  const [apiInitial, setApiInitial] = useState("");
  const [originKey, setOriginKey] = useState("");
  const [destinationKey, setDestinationKey] = useState("");
  const [departure, setDeparture] = useState();
  const [noOfPassengers, setNoOfPassengers] = useState(0);

  const [arrivalTime, setArrivalTime] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");
  const [busType, setBusType] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [duration, setDuration] = useState("");
  const [fares, setFares] = useState("");
  const [tripID, setTripID] = useState("");
  const [busesAvailable, setBusesAvailable] = useState("");
  const [busDetails, setBusDetails] = useState([]);

  useEffect(() => {
    // console.log(location.state);
    // setOrigin(location.state.origin);
    // setDestination(location.state.destination);
    // setOriginKey(location.state.originKey);
    // setDestinationKey(location.state.destinationKey);
    // setDeparture(location.state.departure);
    // setNoOfPassengers(location.state.noOfPassengers);
    setOrigin("Hyderabad");
    setDestination("banglore");
    setOriginKey(1);
    setDestinationKey(10);
    setDeparture("05-03-2022");
    setNoOfPassengers(2);
    setBusDetails([{}, {}, {}]);
    console.log("o", originKey);
    console.log("d", destinationKey);

    // axios
    //   .post("http://3.109.160.178:8082/api/v1/bus/searchbus", {
    //     retailerId: 1,
    //     origin: 1,
    //     destination: 10,
    //     departure: "05-03-2022",
    //     noOfPassengers: 2,
    //   })
    //   .then((response) => {
    //     console.log("post reponse", response.data);
    //     setBusesAvailable(
    //       response.data.Responses[0].Journey.AvailableTrips.length
    //     );
    //     setBusDetails(response.data.Responses[0].Journey.AvailableTrips);
    //     console.log(busesAvailable);
    //   });
  }, [originKey, destinationKey]);

  const onChangeText = () => {
    console.log("text enter");
  };

  return (
    <div className="outer-box">
      <div className="top-bar"></div>
      <div className="nav-bar"></div>
      <div className="main-container">
        <div className="state-bar">
          <div className="values">
            <span className="val-tg-txt">{origin}</span>
            <img className="val-tg-img" src={arrow} />
            <span className="val-tg-txt">{destination}</span>

            <img className="val-tg-img cal-img" src={calendar} />
            <span className="val-tg-date">{departure}</span>
          </div>
          <div className="val-btns">
            <button className="val-tg-btn">
              <span className="val-tg-bt-txt">Modify Search</span>
            </button>
            <button className="val-tg-btn">
              <span className="val-tg-bt-txt">Bus Matrix</span>
            </button>
            <button className="val-tg-btn">
              <span className="val-tg-bt-txt">Action</span>
            </button>
          </div>
        </div>
        <div className="trip-bar">
          <table width="100%">
            <tbody>
              <tr className="top-trip-row">
                <th>
                  <div className="trip-tag-name">Trip</div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 00-04 </span>
                  </div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 04-08 </span>
                  </div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 08-12 </span>
                  </div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 12-16 </span>
                  </div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 16-20 </span>
                  </div>
                </th>
                <th>
                  <div className="trip-tag-type">
                    <span className="trip-tag-tp-txt"> 20-00 </span>
                  </div>
                </th>
              </tr>
              <tr className="trip-row-2">
                <td>
                  <button className="trip-rst-btn">
                    <span className="rst-btn-txt">Reset</span>
                  </button>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
                <td>
                  <span className="trip-rst-txt">N/A</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="seperator-bar">
          <span className="avl-bus-lbl">{busesAvailable} buses available</span>

          <div className="sep-lft-btns">
            <span className="sep-lft-btn">
              <img src={lftLogo} />
              <span className="sep-lft-btn-txt"> Previous Day </span>
            </span>
            <span className="sep-lft-btn">
              <span className="sep-lft-btn-txt">Next Day</span>
              <img src={rightLogo} />
            </span>
          </div>
        </div>
        <div>
          <div>
            <table width="100%">
              <tbody>
                <tr className="sort-op-avl">
                  <td>
                    <div className="sort-lbl-txt">Transport Name</div>
                  </td>
                  <td>
                    <div className="sort-lbl-txt">Departure</div>
                  </td>
                  <td>
                    <div className="sort-lbl-txt">Arrival</div>
                  </td>
                  <td>
                    <div className="sort-lbl-txt">Boarding</div>
                  </td>
                  <td>
                    <div className="sort-lbl-txt">Drop</div>
                  </td>
                  <td>
                    <div className="sort-lbl-txt">Fare</div>
                  </td>
                  <td>
                    <span className="sort-lbl-txt">Bus Type</span>
                  </td>
                  <td>
                    <div className="lft-aln-srt-btn">
                      <button className="trip-rst-btn">
                        <span className="rst-btn-txt">Reset All</span>
                      </button>
                    </div>
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>

                {busDetails.map((busDetail, idx) => (
                  <tr className="bus-det-row" key={idx}>
                    <td>
                      <div className="bus-det-div">
                        <span className="bus-serv-name">Vishnu Travels</span>
                        <span className="bus-serv-type">AC Sleeper</span>
                        <div className="bus-seats-avl">
                          <img src={avlSeatLogo} /> 27 Seats
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bus-det-dept">
                        <span className="bus-det-txt-n">20:00</span>
                        <span className="bus-det-txt-s">
                          14 hours : 00 mins
                        </span>
                        <span className="bus-det-txt-r">
                          Boarding & Drop point
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="bus-det-box">
                        <span className="bus-det-txt-n">10:00</span>
                      </div>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <div className="bus-det-box">
                        <span className="bus-det-txt-n">2400.00</span>
                      </div>
                    </td>
                    <td>
                      <div className="bus-det-box">
                        <div className="trip-tag-type">
                          <span className="trip-tag-tp-txt"> Select</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="bus-det-box">
                        <span className="bus-det-txt-n">Quick Book</span>
                      </div>
                    </td>
                    <td>
                      <div className="bus-det-box">
                        <input type="checkbox" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
