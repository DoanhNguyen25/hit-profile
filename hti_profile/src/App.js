import React from 'react';
import './App.css';
import Profile from './components/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <div>
    <Profile/>
  </div>
  );
}

export default App;
