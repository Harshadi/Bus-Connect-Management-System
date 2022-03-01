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
import ContactInfo from './screens/ContactInfo';


const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SearchScreen /> },
    { path: "SearchResults", element: <SearchResults /> },
    { path: "PaxContactDetails", element: <PaxContactDetails/>},
    { path: "ContactInfo", element: <ContactInfo />},
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
