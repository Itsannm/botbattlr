import React from "react";
import Header from "../components/Header";
import BotsCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import BotSearch from '../components/BotSearch'
import Filter from '../components/Filter'

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      allBots: [],
      selectBot: undefined,
      query: '',
      filter: 'All'
    };
  }

  componentDidMount() {
    fetch('https://dbjson-bot-com.onrender.com/bots')
      .then(res => res.json())
      .then(bots => this.setBots(bots))
      .then(bots => this.setState({
        allBots: bots
      }));
  }

  setBots = (bots) => {
    return bots.map(bot => {
      bot.owned = false;
      return bot;
    });
  }

  clickBot = (bot) => {
    this.setState({
      selectBot: bot
    });
  }

  addBot = (selectBot) => {
    let x = this.state.allBots.map(bot => {
      if (bot.id === selectBot.id) {
        bot.owned = !bot.owned;
      }
      return bot;
    });
    this.setState({
      allBots: x
    });
  }

  removeBotFromArmy = (bot) => {
    let x = this.state.allBots.map(b => {
      if (b.id === bot.id) {
        b.owned = false;
      }
      return b;
    });
    this.setState({
      allBots: x
    });
  }

  filterFreeBots = () => {
    let freeBots = this.state.allBots.filter(bot => bot.owned === false);
    if (this.state.filter !== 'All') {
      freeBots = freeBots.filter(bot => bot.bot_class === this.state.filter);
    }
    if (this.state.query) {
      freeBots = freeBots.filter(bot => bot.name.toLowerCase().includes(this.state.query.toLowerCase()));
    }
    return freeBots;
  }

  filterOwnedBots = () => {
    let ownedBots = this.state.allBots.filter(bot => bot.owned === true);
    let filtered = ownedBots.filter(bot => bot.name.toLowerCase().includes(this.state.query.toLowerCase()));
    return filtered;
  }

  handleClear = () => {
    this.setState({
      query: ''
    });
  }

  handleChange = (query) => {
    this.setState({
      query: query
    });
  }

  clearSpec = () => {
    this.setState({
      selectBot: undefined
    });
  }

  filterChange = (value) => {
    this.setState({
      filter: value
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="ui segment inverted olive bot-army">
        <Header />
        <BotSearch handleClear={this.handleClear} handleChange={this.handleChange} />
        <br></br>
        <Filter filterChange={this.filterChange} />
        <YourBotArmy bots={this.filterOwnedBots()} addBot={this.clickBot} removeBot={this.removeBotFromArmy} />
        <br></br>
        {this.state.selectBot ? <BotSpecs bot={this.state.selectBot} clearSpec={this.clearSpec} addBot={this.addBot} /> :
          <BotsCollection bots={this.filterFreeBots()} addBot={this.clickBot} />}
      </div>
    );
  }
}

export default BotsPage;
