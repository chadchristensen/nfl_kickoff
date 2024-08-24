import { useState, useEffect } from 'react';
import { useInterval } from '../customHooks.ts';
import gameData, { TeamData } from '../gameData.ts';
import quotes from '../footballQuotes.ts';
import Wrapper from './Wrapper';
import Header from './Header';
import GameCard from './GameCard';
import Countdown from './Countdown';
import Typeahead from './Typeahead';

// TODO: Extract quote component

export default function Home() {
  // State Hooks
  const [selectedTeam, setSelectedTeam] = useState<TeamData>();
  const [opponentInfo, setOpponentInfo] = useState<TeamData>();
  const [countdown, setCountdown] = useState(0);
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  useEffect(() => {
    // TODO: I could just store a the text of the team code, ex. 'ATL'
    const selectedTeamFromStorage = sessionStorage.getItem('selectedTeam');
    const selectedTeam = selectedTeamFromStorage ? JSON.parse(selectedTeamFromStorage) : undefined;

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

  const handleTeamChange = (teamCode: string) => {
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
          handleTeamChange={handleTeamChange}
        />
        <hr
          style={{
            borderTop: '1px solid #f2f2f2',
            margin: '1.5rem'
          }}
        />
        {
          typeof selectedTeam?.team !== 'undefined' ? (
            <div>
              <GameCard
                teamInfo={selectedTeam}
                opponentInfo={opponentInfo}
              />
              {
                opponentInfo ? (
                  <>
                    <h3>Kickoff Is In:</h3>
                    <Countdown kickoffTimeInMilliseconds={countdown} />
                  </>
                ) : null
              }
            </div>
          ) :
            null
        }
        {
          !selectedTeam?.team ? (
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
          ) : null
        }
      </Wrapper>
    </>
  );
}
