import React from 'react'
import styled from 'styled-components'

import TeamCard from './TeamCard.js';

const TeamMatchup = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
`

const VersusText = styled.span`
  align-self: center;
  font-size: 2.5em;
  font-weight: bold;

  @media(max-width: 820px) {
    font-size: 1.75em;
  }

  @media(max-width: 425px) {
    font-size: 1.25em;
  }
`

export default function Matchup({ teamInfo, opponentInfo }) {
  return (
    <TeamMatchup>
      <TeamCard
        key={teamInfo.team}
        teamName={teamInfo.team}
        teamLogoUrl={teamInfo.teamLogoUrl}
      />
      <VersusText>vs.</VersusText>
      {
        typeof opponentInfo === 'undefined'
          ? <div className='team-card'><h2>TBD</h2></div>
          : <TeamCard
            key={opponentInfo.team}
            teamName={opponentInfo.team}
            teamLogoUrl={opponentInfo.teamLogoUrl}
          />
      }
    </TeamMatchup>
  )
}
