import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const BotCollection = ({ bots, setBots }) => {
  // Get the unenlisted bots (bots with isEnlisted as false)
  const unenlistedBots = bots.filter(bot => !bot.isEnlisted);

  const handleEnlistBot = (bot) => {
    // Mark the bot as enlisted (isEnlisted: true)
    const updatedBots = bots.map(item => (item.id === bot.id ? { ...item, isEnlisted: true } : item));
    // Update the bots state in App.js
    setBots(updatedBots);
  };

  return (
    <div className="bot-collection">
      <h1>Bot Collection</h1>
      {/* Display the list of unenlisted bots */}
      {unenlistedBots.map(bot => (
        <div key={bot.id} className="bot-card">
          <Link to={`/bot-specs/${bot.id}`} className="bot-link">
            <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
            <h3>{bot.name}</h3>
          </Link>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          {/* Button to enlist the bot */}
          <button onClick={() => handleEnlistBot(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
