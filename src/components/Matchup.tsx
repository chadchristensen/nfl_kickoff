import TeamCard from './TeamCard.tsx';
import { TeamData } from '../gameData.ts';

type MatchupProps = {
  teamInfo: TeamData,
  opponentInfo: TeamData | undefined;
}

export default function Matchup({ teamInfo, opponentInfo }: MatchupProps) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-x-4'>
      <TeamCard
        key={teamInfo.team}
        teamName={teamInfo.team}
        teamLogoUrl={teamInfo.teamLogoUrl}
      />
      <span className='text-[2em] font-semibold'>vs.</span>
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
  )
}
