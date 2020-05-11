import React, { useState, useEffect } from 'react';
import { useInterval } from '../customHooks.js';
import gameData from '../gameData.js';
import TeamCard from './TeamCard.js';
import Countdown from './Countdown.js';
import TeamSelect from './TeamSelect.js';

export default function Home(props) {
  // State Hooks
  const [teamInfo, setTeamInfo] = useState({});
  const [opponentInfo, setOpponentInfo] = useState({});
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const teamInfo = JSON.parse(sessionStorage.getItem('teamInfo'));

    if (teamInfo) {
      const kickoffTimeObject = new Date(teamInfo.kickoff);
      const opponentInfo = gameData[teamInfo.opponent.toLowerCase()];
      setCountdown(kickoffTimeObject.getTime() - Date.now());
      setTeamInfo(teamInfo);
      setOpponentInfo(opponentInfo);
    }
  }, []);

  // Interval
  useInterval(() => {
    if (countdown > 0) {
      setCountdown(countdown - 1000);
    }
  }, 1000);

  const handleTeamChange = evt => {
    const teamInfo = gameData[evt.target.value.toLowerCase()];
    const opponentInfo = gameData[teamInfo.opponent.toLowerCase()];
    const kickoffTimeObject = new Date(teamInfo.kickoff);

    setCountdown(kickoffTimeObject.getTime() - Date.now());

    setTeamInfo(teamInfo);
    setOpponentInfo(opponentInfo);

    // Store team in sessionStorage to keep result if page refreshes
    sessionStorage.setItem('teamInfo', JSON.stringify(teamInfo));
  };

  return (
    <div className="wrapper">
      <header>
        <h1>2020 Countdown to Kickoff</h1>
      </header>
      <TeamSelect
        teamInfo={teamInfo}
        gameData={gameData}
        handleTeamChange={handleTeamChange}
      />

      {teamInfo.team ? (
        <div className="container">
          <div className="matchup-section">
            {
              typeof opponentInfo === 'undefined'
                ? null
                : <h2>
                    {new Date(teamInfo.kickoff).toLocaleString('en-us', {
                      dateStyle: 'full',
                      timeStyle: 'short'
                    })}
                  </h2>
            }
            
            <div className="matchup-teams">
              <TeamCard
                key={teamInfo.team}
                teamName={teamInfo.team}
                teamLogoUrl={teamInfo.teamLogoUrl}
              />
              <span className="vs">vs.</span>
              {
                typeof opponentInfo === 'undefined'
                 ? <div className='team-card'><h2>TBD</h2></div>
                 : <TeamCard
                    key={opponentInfo.team}
                    teamName={opponentInfo.team}
                    teamLogoUrl={opponentInfo.teamLogoUrl}
                  />
              }
              
            </div>
          </div>
          {
            typeof opponentInfo === 'undefined'
              ? null
              : <div>
                  <div className="kickoff-countdown-section">
                    <h3>Kick Off In:</h3>
                    <Countdown kickoff={countdown} />
                  </div>
                </div>
          }
          
        </div>
      ) : null}
    </div>
  );
}
