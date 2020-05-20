import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  text-align: center;
  width: 80%;
  max-width: 800px;
  background-color: #eee;
  color: #222;
  margin: 0 auto;
  border-radius: 5px;
  padding: 1.5em;
`;

export default function Container({children }) {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}
