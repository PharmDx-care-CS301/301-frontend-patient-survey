import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/Login/login";
import SurveyPage from "./components/Survey/survey";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/survey" component={SurveyPage} />
    </Router>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

