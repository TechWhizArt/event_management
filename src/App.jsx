import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard'
import EventCard from './components/EventCard'
import Header from './components/header'
import Login from './pages/Login'


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Dashboard />
              <EventCard />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App

