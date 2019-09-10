import React from 'react'
import './App.css'
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom"

function App() {
  return (
   <Router>
     
       <Route exact path="/" component={LoginPage}></Route>
       <Route exact path="/home" component={HomePage}></Route>
     
   </Router>
  );
}

export default App;
