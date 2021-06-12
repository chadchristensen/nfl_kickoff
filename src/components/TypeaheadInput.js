import React from 'react'
import styled from 'styled-components';

const SearchWrapper = styled.div`
  z-index: 101;
  display: flex;
  align-items: center;
  padding: 0 0.25rem;
  background-color: #f2f2f2;
  border-radius: inherit;
  border-bottom-left-radius: ${props => props.areResultsVisible ? '0' : 'inherit'};
  border-bottom-right-radius: ${props => props.areResultsVisible ? '0' : 'inherit'};

  > svg {
    padding: 1rem;
    stroke: #4E4E4E;
    width: 1.5rem;
    height: 1.5rem;
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: inherit;
  font-size: 1.25rem;
  appearance: none;
  border: none;
`

export default function TypeaheadInput({ handleTeamSearch, searchTerm }) {
  return (
    <SearchWrapper areResultsVisible={searchTerm.length > 1}>
      <SearchInput
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
    </SearchWrapper>
  )
}
