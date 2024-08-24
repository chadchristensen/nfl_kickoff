import TeamCard from './TeamCard.tsx';
import { TeamData } from '../gameData.ts';

type MatchupProps = {
  teamInfo: TeamData,
  opponentInfo: TeamData | undefined;
}

export default function Matchup({ teamInfo, opponentInfo }: MatchupProps) {
  return (
    <>
      <TeamCard
        key={teamInfo.team}
        teamName={teamInfo.team}
        teamLogoUrl={teamInfo.teamLogoUrl}
      />
      <span>vs.</span>
      {
        typeof opponentInfo === 'undefined'
          ? <div className='team-card'><h2>TBD</h2></div>
          : <TeamCard
            key={opponentInfo.team}
            teamName={opponentInfo.team}
            teamLogoUrl={opponentInfo.teamLogoUrl}
          />
      }
    </>
  )
}
