import { TeamData } from "../gameData";

type TeamSelectProps = {
  gameData: Record<string, { team: string, teamLogoUrl: string }>,
  teamInfo: TeamData,
  handleTeamChange: (event: React.FormEvent<HTMLSelectElement>) => void,
}

function TeamSelect({ gameData, teamInfo, handleTeamChange }: TeamSelectProps) {
  const teamList = Object.keys(gameData)
    .sort()
    .map(team => (
      <option key={gameData[team].team} value={gameData[team].team}>
        {gameData[team].team}
      </option>
    ));

  return (
    <div className="team-select-section">
      <label htmlFor="team-dropdown">Select Your Team:</label>
      <select
        name="selectedTeam"
        className="select-css"
        id="team-dropdown"
        onChange={handleTeamChange}
        value={teamInfo.team}
      >
        {teamList}
      </select>
    </div>
  );
}

export default TeamSelect;