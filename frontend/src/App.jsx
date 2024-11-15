import React from 'react';
// import './App.css';
import Login from './components/Login'
import Registeration from './components/Registeration';
import Home from './components/Home'
import {BrowserRouter, Routes} from 'react-router-dom'
import {Routes as Switch,Route} from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';
import Dashboard from './components/Dashboard';
import Audience from './components/Audience';
import CampaignStats from './components/CampaignStats';
import Campaigns from './components/Campains';

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/audience" element={<Audience />} />
        <Route path="/campaigns" element={<Campaigns/>} />
      </Routes>
      </BrowserRouter>
    </div>
    </AuthContextProvider>
  )
}

export default App;