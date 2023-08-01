import React from 'react';
import './App.css';

const YourBotArmy = ({ bots, setBots }) => {
  // Get the enlisted bots (bots with isEnlisted as true)
  const enlistedBots = bots.filter(bot => bot.isEnlisted);

  const handleReleaseBot = (bot) => {
    // Mark the bot as not enlisted (isEnlisted: false)
    const updatedBots = bots.map(item => (item.id === bot.id ? { ...item, isEnlisted: false } : item));
    // Update the bots state in App.js
    setBots(updatedBots);
  };

  return (
    <div className="your-bot-army">
      <h1>Your Bot Army</h1>
      <div className="bot-list">
        {enlistedBots && enlistedBots.length > 0 ? (
          enlistedBots.map(bot => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
              <h3>{bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              {/* Button to release the bot */}
              <button onClick={() => handleReleaseBot(bot)}>Release</button>
            </div>
          ))
        ) : (
          <p>No bots enlisted in your army.</p>
        )}
      </div>
    </div>
  );
};

export default YourBotArmy;
