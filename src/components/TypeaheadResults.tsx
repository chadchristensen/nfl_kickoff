import { TypeaheadResult } from './Typeahead';

type TypeaheadResultsProps = {
  searchTerm: string,
  filteredResults: TypeaheadResult[],
  handleTeamSelect: (teamCode: string) => void,
}

export default function TypeaheadResults({ searchTerm, filteredResults, handleTeamSelect }: TypeaheadResultsProps) {
  return (
    <ul>
      {
        searchTerm.length > 1
          ? filteredResults.length > 0
            ? filteredResults.map((team) => (
              <li
                key={team.teamCode}
                onKeyPress={(e) => e.key === 'Enter' && handleTeamSelect(team.teamCode)}
                onClick={() => handleTeamSelect(team.teamCode)}
              >
                <img src={team.teamLogoUrl} alt={`${team.teamName} logo`} aria-hidden={true} /> {team.teamName}
              </li>
            ))
            : <li>No results found</li>
          : null
      }
    </ul >
  )
}
