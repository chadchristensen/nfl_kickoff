import React from 'react';

export default function TeamSelect(props) {
  const teamList = Object.keys(props.gameData)
    .sort()
    .map(team => (
      <option key={props.gameData[team].team} value={props.gameData[team].team}>
        {props.gameData[team].team}
      </option>
    ));

  return (
    <div className="team-select-section">
      <label htmlFor="team-dropdown">Select Your Team:</label>
      <select
        name="selectedTeam"
        className="select-css"
        id="team-dropdown"
        onChange={props.handleTeamChange}
        value={props.teamInfo.team}
      >
        {teamList}
      </select>
    </div>
  );
}
