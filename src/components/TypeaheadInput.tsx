import { ChangeEvent } from 'react'

type TypeaheadInputProps = {
  handleTeamSearch: (e: ChangeEvent<HTMLInputElement>) => void,
  searchTerm: string
}

// TODO: Extract SearchIncon SVG

export default function TypeaheadInput({ handleTeamSearch, searchTerm }: TypeaheadInputProps) {
  return (
    <div>
      <input
        type="search"
        name="team-search"
        id="team-search"
        aria-label="Search for a team"
        placeholder="Search for a team"
        onChange={handleTeamSearch}
        value={searchTerm}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  )
}
