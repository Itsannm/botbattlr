import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from './BotSpecs'; // Make sure to import BotSpecs

import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);

  const fetchBots = async () => {
    try {
      const response = await fetch('http://localhost:3000/bots');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      // Add the isEnlisted property to each bot, initializing it as false
      const botsWithEnlistedStatus = data.map(bot => ({ ...bot, isEnlisted: false }));
      setBots(botsWithEnlistedStatus);
    } catch (error) {
      console.error('Error fetching bots:', error);
      setBots([]);
    }
  };

  useEffect(() => {
    // Fetch the list of bots from the backend API
    fetchBots();
  }, []);

  return (
    <Router>
      <div>
        {/* Render the YourBotArmy component first with the enlisted bots */}
        <YourBotArmy bots={bots} setBots={setBots} />
        {/* Then, render the BotCollection component with the rest of the bots */}
        <BotCollection bots={bots} setBots={setBots} />
        {/* Use Routes to define your routes */}
        <Routes>
          <Route path="/bot-specs/:id" element={<BotSpecs bots={bots} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
