import './App.css';
import React,{useState,useEffect} from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">

        <BrowserRouter>
        <Navbar 
          />
          <Switch>
          <Route exact path='/' component={HomePage} />
          
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
