import { FormEvent, useState } from 'react'

import TypeaheadInput from './TypeaheadInput.tsx';
import TypeaheadResults from './TypeaheadResults.tsx';
import gameData from '../gameData';

type TypeaheadProps = {
  handleTeamChange: (teamCode: string) => void
}

export type TypeaheadResult = {
  teamCode: string;
  teamName: string;
  teamLogoUrl: string;
}

export default function Typeahead({ handleTeamChange }: TypeaheadProps) {
  const [filteredResults, setFilteredResults] = useState<TypeaheadResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const teams = Object.entries(gameData)
    .map(([teamCode, teamInfo]) => (
      {
        teamCode,
        teamName: teamInfo.team,
        teamLogoUrl: teamInfo.teamLogoUrl
      }
    ));

  const handleTeamSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;

    setSearchTerm(value);
    // TODO: Couldn't I just use indexOf?
    const result = teams.filter(team => {
      const city = team.teamName.slice(0, team.teamName.lastIndexOf(' '));
      const mascot = team.teamName.slice(team.teamName.lastIndexOf(' ') + 1);
      const regex = new RegExp(`^${value}`, 'i')

      return regex.test(team.teamName) || regex.test(city) || regex.test(mascot);
    });

    setFilteredResults(result);
  }

  const handleTeamSelect = (teamCode: string) => {
    setSearchTerm('');
    setFilteredResults([]);
    handleTeamChange(teamCode);
  }

  return (
    <div>
      <TypeaheadInput
        searchTerm={searchTerm}
        handleTeamSearch={handleTeamSearch}
      />
      <TypeaheadResults
        searchTerm={searchTerm}
        filteredResults={filteredResults}
        handleTeamSelect={handleTeamSelect}
      />
    </div>
  )
}
