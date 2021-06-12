import React from 'react'
import styled from 'styled-components';

import ConditionalComponent from './ConditionalComponent.js';
import DateDisplay from './DateDisplay.js';
import Matchup from './Matchup.js';

const StyledGameCard = styled.div`

`;

export default function GameCard({ teamInfo, opponentInfo }) {
  return (
    <StyledGameCard>
      <ConditionalComponent condition={typeof opponentInfo !== 'undefined'}>
        <DateDisplay kickoff={teamInfo.games[0].kickoff} />
      </ConditionalComponent>
      <Matchup
        teamInfo={teamInfo}
        opponentInfo={opponentInfo}
      />
    </StyledGameCard>
  )
}
