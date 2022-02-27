import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import SearchScreen from './screens/SearchScreen';
import SearchResults from './screens/SearchResults';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <SearchScreen /> },
    { path: "SearchResults", element: <SearchResults /> },
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
