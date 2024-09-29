import { TeamData } from '../gameData.ts';
import Matchup from './Matchup.tsx';

type GameCardProps = {
  teamInfo: TeamData;
  opponentInfo: TeamData | undefined;
}

export default function GameCard({ teamInfo, opponentInfo }: GameCardProps) {
  return (
    <>
      <Matchup
        teamInfo={teamInfo}
        opponentInfo={opponentInfo}
      />
    </>
  )
}
