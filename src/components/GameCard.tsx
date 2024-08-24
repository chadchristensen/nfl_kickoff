import { TeamData } from '../gameData.ts';
import DateDisplay from './DateDisplay.tsx';
import Matchup from './Matchup.tsx';

type GameCardProps = {
  teamInfo: TeamData;
  opponentInfo: TeamData | undefined;
}

export default function GameCard({ teamInfo, opponentInfo }: GameCardProps) {
  return (
    <>
      {
        opponentInfo ? (
          <DateDisplay kickoffTime={teamInfo.games[0].kickoff} />
        ) : null
      }
      <Matchup
        teamInfo={teamInfo}
        opponentInfo={opponentInfo}
      />
    </>
  )
}
