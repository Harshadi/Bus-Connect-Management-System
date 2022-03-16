import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import SearchScreen from './screens/SearchScreen';
import SearchResults from './screens/SearchResults';
import PaxContactDetails from './screens/PaxContactDetails';
// import ContactInfo from './screens/ContactInfo';
import BookingReview from './screens/BookingReview';
import ReprintScreen from './screens/ReprintScreen';
import PAXCalendar from './screens/PAXCalendar';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SearchScreen /> },
    { path: "SearchResults", element: <SearchResults /> },
    { path: "PaxContactDetails", element: <PaxContactDetails/>},
    { path: "BookingReview", element: <BookingReview />},
    { path: "ReprintScreen", element: <ReprintScreen />},
    { path: "PAXCalendar", element: <PAXCalendar />},
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
