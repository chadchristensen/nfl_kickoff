import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  margin: 4em;
  padding: 1.5em 3em;
  border-radius: 5px;
`

export default function Wrapper({ children }) {
  return (
    <StyledWrapper>
      { children }
    </StyledWrapper>
  )
}
