import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./components/Login/login";
import SurveyPage from "./components/Survey/survey";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { SnackbarProvider } from "notistack";
import MainPage from "./components/ Main/main";

Amplify.configure(config);

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/survey" component={SurveyPage} />
    </Router>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

