import React, { useState, useEffect } from 'react';
import gameData from '../gameData.js';
import TeamCard from './TeamCard.js';
import Countdown from './Countdown.js';
import TeamSelect from './TeamSelect.js';

export default function Home(props) {
  // Hooks
  const [teamInfo, setTeamInfo] = useState({});
  const [opponentInfo, setOpponentInfo] = useState({});
  const [countdown, setCountdown] = useState(0);

  // Interval
  let countdownTimeout = null;

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

  useEffect(() => {
    function handleCountdown() {
      setCountdown(countdown - 1000);
    }

    countdownTimeout = setTimeout(handleCountdown, 1000);

    return () => {
      clearTimeout(countdownTimeout);
    };
  });

  // TODO: Clean this up
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

  return (
    <div className="wrapper">
      <header>
        <h1>Countdown to Kickoff</h1>
      </header>
      <TeamSelect
        teamInfo={teamInfo}
        gameData={gameData}
        handleTeamChange={handleTeamChange}
      />

      {teamInfo.team ? (
        <div className="container">
          <div className="matchup-section">
            <h2>
              {new Date(teamInfo.kickoff).toLocaleString('en-us', {
                dateStyle: 'full',
                timeStyle: 'short'
              })}
            </h2>
            {/* <h3>{new Date(teamInfo.kickoff).toLocaleTimeString('en-US')}</h3> */}
            <div className="matchup-teams">
              <TeamCard
                teamName={teamInfo.team}
                teamLogoUrl={teamInfo.teamLogoUrl}
              />
              <span className="vs">vs.</span>
              <TeamCard
                teamName={opponentInfo.team}
                teamLogoUrl={opponentInfo.teamLogoUrl}
              />
            </div>
          </div>
          <div>
            <div className="kickoff-countdown-section">
              <h3>Kick Off In:</h3>
              <Countdown kickoff={countdown} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
