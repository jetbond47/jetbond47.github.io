import React, { Component } from "react";
import '../scss/nhl.scoped.scss';

class NHL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      team: [],
    };
  }
  
  render() {
    let teamsApiCall = async (apiCall) => {
      const response = await fetch(apiCall);
      const data = await response.json();
      this.setState({
        teams: data["teams"]
      })
    }; 
    let teamApiCall = async (apiCall, id) => {
      const response = await fetch(apiCall);
      const data = await response.json();
      this.setState({
        team : {
            [id]: data["stats"][0]
        }
      })
      console.log(this.state.team)
    }; 
    teamsApiCall("https://statsapi.web.nhl.com/api/v1/teams");
    return (
      <div id="nhl">
        <h2 className="text-5xl flex justify-center p-5"> Work in progress. Click the team for more information on each team</h2>
        {this.state.teams && (
          <div className="teams">
            {this.state.teams.map((team, index) => (
              <><div className="teamName text-3xl flex justify-center cursor-pointer" id={team.id} key={team.id} onClick={() => teamApiCall("https://statsapi.web.nhl.com/api/v1/teams/" + team.id + "/stats", team.id)}>
                <h2 style={{
                  backgroundImage: "url(/images/portfolio/NHL/" + team.id + ".svg)"
                }}>{team.name}</h2>
              </div>
              <div className="teamStats">
                {this.state.team[team.id] && (
                  <div className="">
                    <div className="text-2xl flex justify-center">
                      <h3>Record: {this.state.team[team.id].splits[0].stat.wins} - {this.state.team[team.id].splits[0].stat.losses} - {this.state.team[team.id].splits[0].stat.ot}</h3>
                    </div>
                  </div>
                )}
              </div></>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default NHL;