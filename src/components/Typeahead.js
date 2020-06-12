import React, { useState } from 'react'
import styled from 'styled-components';

import TypeaheadInput from './TypeaheadInput';
import TypeaheadResults from './TypeaheadResults';

const TypeaheadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 550px;
  margin: 0 auto 1.5rem;
  position: relative;
  box-shadow: 2px 2px 5px 0px #00000025;
  border-radius: 0.5rem;
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
    <TypeaheadWrapper>
      <TypeaheadInput
        searchTerm={searchTerm}
        handleTeamSearch={handleTeamSearch}
      />
      <TypeaheadResults
        searchTerm={searchTerm}
        filteredResults={filteredResults}
        handleTeamSelect={handleTeamSelect}
      />
    </TypeaheadWrapper>
  )
}
