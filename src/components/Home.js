import React, { useState, useEffect } from 'react';
import { useInterval } from '../customHooks.js';
import gameData from '../gameData.js';
import ConditionalComponent from './ConditionalComponent.js';
import Wrapper from './Wrapper.js';
import Container from './Container.js'
import Header from './Header.js';
import GameCard from './GameCard.js';
import Countdown from './Countdown.js';
import Typeahead from './Typeahead.js';

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

  const handleTeamChange = teamName => {
    const teamInfo = gameData[teamName.toLowerCase()];
    const opponentInfo = gameData[teamInfo.opponent.toLowerCase()];
    const kickoffTimeObject = new Date(teamInfo.kickoff);

    setCountdown(kickoffTimeObject.getTime() - Date.now());

    setTeamInfo(teamInfo);
    setOpponentInfo(opponentInfo);

    // Store team in sessionStorage to keep result if page refreshes
    sessionStorage.setItem('teamInfo', JSON.stringify(teamInfo));
  };

  return (
    <Wrapper>
      <Header />
      <Typeahead
        gameData={gameData}
        handleTeamChange={handleTeamChange}
      />
      <ConditionalComponent condition={typeof teamInfo.team !== 'undefined'}>
        <Container>
          <GameCard
            teamInfo={teamInfo}
            opponentInfo={opponentInfo}
          />
          <ConditionalComponent condition={typeof opponentInfo !== 'undefined'}>
            <div className="kickoff-countdown-section">
              <h3>Kick Off In:</h3>
              <Countdown kickoff={countdown} />
            </div>
          </ConditionalComponent>
        </Container>
      </ConditionalComponent>
    </Wrapper>
  );
}
