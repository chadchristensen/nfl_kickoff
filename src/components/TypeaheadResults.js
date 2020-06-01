import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';


const SearchResults = styled.ul`
  z-index: 100;
  position: absolute;
  top: 100%;
  background-color: white;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  box-shadow: 2px 2px 5px 0px #00000045;

  li {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;

    &:hover, &:focus {
      background: #CFEEFF;
      cursor: pointer;
    }

    img {
      height: 2rem;
      width: 2rem;
      margin-right: 1rem;
    }
  }
`

export default function TypeaheadResults({ searchTerm, filteredResults, handleTeamSelect}) {
  return (
    <SearchResults>
      {
        searchTerm.length > 1
          ? filteredResults.length > 0
            ? filteredResults.map(team => (
              <motion.li
                animate={{ x: [15, -5, 0] }}
                transition={{ duration: 0.4 }}
                positionTransition
                key={team.teamName}
                tabIndex='0'
                onKeyPress={(e) => e.key === 'Enter' && handleTeamSelect(team.teamName)}
                onClick={() => handleTeamSelect(team.teamName)}
              >
                <img src={team.logo} alt={`${team.teamName} logo`} aria-hidden={true} /> {team.teamName}
              </motion.li>
            ))
            : <li>No results found</li>
          : null
      }
    </SearchResults>
  )
}
