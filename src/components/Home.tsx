import { useState, useEffect } from 'react';
import { useInterval } from '../customHooks.ts';
import gameData, { TeamData } from '../gameData.ts';
import quotes from '../footballQuotes.ts';
import Header from './Header';
import GameCard from './GameCard';
import Countdown from './Countdown';
import Typeahead from './Typeahead';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.tsx';
import QuoteBlock from './Quote.tsx';
import DateDisplay from './DateDisplay.tsx';

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
      <Card className='max-w-4xl m-auto shadow-md'>
        <CardHeader>
          <CardTitle className='text-center'>
            Countdown to Kickoff
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Typeahead
            selectedTeam={selectedTeam}
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
              <div className='flex flex-col items-center bg-gray-100 border-gray-200 border-2 gap-4 p-8 rounded-md'>
                <GameCard
                  teamInfo={selectedTeam}
                  opponentInfo={opponentInfo}
                />
                {
                  opponentInfo ? (
                    <>
                      <DateDisplay kickoffTime={selectedTeam.games[0].kickoff} />
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
              <QuoteBlock randomQuote={randomQuote} />
            ) : null
          }
        </CardContent>

      </Card>
    </>
  );
}
