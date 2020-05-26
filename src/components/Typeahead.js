import React, { useState } from 'react'
import styled from 'styled-components';

const TypeaheadInput = styled.input`
    padding: .5rem 1rem;
    border-radius: .25rem;
    font-size: 1.25rem;
`

const TypeaheadResults = styled.ul`
  padding: 0;

  & :last-child {
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  li {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0.5rem 1rem;
    border-bottom: 1px solid gray;
    font-size: 1.25rem;

    &:hover, &:focus {
      background: #CFEEFF;
      cursor: pointer;
    }

    img {
      height: 2.5rem;
      width: 2.5rem;
      padding-right: 1rem;
    }
  }
`

export default function Typeahead({ gameData, handleTeamChange }) {
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const teams = Object.values(gameData).map(team => ({ teamName: team.team, logo: team.teamLogoUrl }))

  const handleTeamSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);

    const result = teams.filter(team => {
      const city = team.teamName.slice(0, team.teamName.lastIndexOf(' '));
      const mascot = team.teamName.slice(team.teamName.lastIndexOf(' ') + 1);
      const regex = new RegExp(`^${value}`, 'i')

      return regex.test(team.teamName) || regex.test(city) || regex.test(mascot);
    });

    setFilteredResults(result);
  }

  const handleTeamSelect = (teamName) => {
    setSearchTerm('');
    setFilteredResults([]);
    handleTeamChange(teamName);
  }

  return (
    <>
    <label htmlFor="team-search">Search for a team</label>
    <TypeaheadInput
      type="text"
      name="team-search"
      id="team-search"
      placeholder="Enter team name"
      onChange={handleTeamSearch}
      value={searchTerm}
    />
    <TypeaheadResults>
      {
        searchTerm.length > 1
          ? filteredResults.length > 0
            ? filteredResults.map(team => (
              <li
                tabIndex='0'
                onKeyPress={(e) => e.key === 'Enter' && handleTeamSelect(team.teamName)}
                onClick={() => handleTeamSelect(team.teamName)}
              >
                <img src={team.logo} alt={`${team.teamName} logo`} aria-hidden={true}/> {team.teamName}
              </li>
            ))
            : <li>No results found</li>
          : null
      }
    </TypeaheadResults>
    </>
  )
}
