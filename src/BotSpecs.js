import React from 'react';
import './App.css';

const BotSpecs = ({ bot }) => {
  if (!bot) {
    return <p>Bot not found.</p>;
  }

  return (
    <div className="bot-specs">
      <h2>Bot Specifications</h2>
      <img src={bot.avatar_url} alt={`Avatar of ${bot.name}`} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: "{bot.catchphrase}"</p>
      <p>Created At: {bot.created_at}</p>
      <p>Updated At: {bot.updated_at}</p>
    </div>
  );
};

export default BotSpecs;