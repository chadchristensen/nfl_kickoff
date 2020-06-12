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
  const [selectedTeam, setSelectedTeam] = useState({});
  const [opponentInfo, setOpponentInfo] = useState({});
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const selectedTeam = JSON.parse(sessionStorage.getItem('selectedTeam'));

    if (selectedTeam) {
      const kickoffTimeObject = new Date(selectedTeam.kickoff);
      const opponentInfo = gameData[selectedTeam.opponent.toLowerCase()];
      setCountdown(kickoffTimeObject.getTime() - Date.now());
      setSelectedTeam(selectedTeam);
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
    const selectedTeam = gameData[teamName.toLowerCase()];
    const opponentInfo = gameData[selectedTeam.opponent.toLowerCase()];
    const kickoffTimeObject = new Date(selectedTeam.kickoff);

    setCountdown(kickoffTimeObject.getTime() - Date.now());

    setSelectedTeam(selectedTeam);
    setOpponentInfo(opponentInfo);

    // Store team in sessionStorage to keep result if page refreshes
    sessionStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Typeahead
          gameData={gameData}
          handleTeamChange={handleTeamChange}
        />
        <hr
          style={{
            borderTop: '1px solid #f2f2f2',
            margin: '1.5rem'
          }}
        />
        <ConditionalComponent condition={typeof selectedTeam.team !== 'undefined'}>
          <Container>
            <GameCard
              teamInfo={selectedTeam}
              opponentInfo={opponentInfo}
            />
            <ConditionalComponent condition={typeof opponentInfo !== 'undefined'}>
              <div>
                <h3>Kick Off In:</h3>
                <Countdown kickoff={countdown} />
              </div>
            </ConditionalComponent>
          </Container>
        </ConditionalComponent>
      </Wrapper>
    </>
  );
}
