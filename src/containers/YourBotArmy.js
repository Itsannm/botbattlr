import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
	renderBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
		})
  }
  
  render(){
    return (
      <div >
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            <h3>Your Bot Army</h3>
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;