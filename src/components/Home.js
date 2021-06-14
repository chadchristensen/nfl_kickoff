import React, { useState, useEffect } from 'react';
import { useInterval } from '../customHooks.js';
import gameData from '../gameData.ts';
import quotes from '../footballQuotes.ts';
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
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    const selectedTeam = JSON.parse(sessionStorage.getItem('selectedTeam'));

    if (selectedTeam) {
      const kickoffTimeObject = new Date(selectedTeam.games[0].kickoff);
      const opponentInfo = gameData[selectedTeam.games[0].opponent];
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

  const handleTeamChange = teamCode => {
    const selectedTeam = gameData[teamCode];
    const opponentInfo = gameData[selectedTeam.games[0].opponent];
    const kickoffTimeObject = new Date(selectedTeam.games[0].kickoff);

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
                <h3>Kickoff Is In:</h3>
                <Countdown kickoff={countdown} />
              </div>
            </ConditionalComponent>
          </Container>
        </ConditionalComponent>
        <ConditionalComponent condition={!selectedTeam.team}>
          <figure
            style={{
              background: '#eee',
              padding: '1rem 1.5rem',
              borderRadius: '.25rem',
              width: '65%',
              margin: '0 auto'
            }}
          >
            <blockquote
              style={{
                margin: '0 0 1.25rem 0',
                fontSize: '1.5rem',
                lineHeight: '2rem'
              }}
            >
              {randomQuote.text}
            </blockquote>
            <figcaption
              style={{
                marginLeft: '1rem',
                fontSize: '1.125rem',
                fontStyle: 'italic'
              }}
            >
              &mdash; {randomQuote.author}
            </figcaption>
          </figure>
        </ConditionalComponent>
      </Wrapper>
    </>
  );
}
