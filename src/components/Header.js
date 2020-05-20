import React from 'react'
import styled from 'styled-components'

const StyledHeading = styled.h1`
  text-align: center;
  color: #eee;
  text-transform: uppercase;
  font-size: 3em;
  text-shadow: 3px 0px 0px rgba(0, 0, 0, 0.25);
  padding-bottom: 16px;
  margin-top: 0;

  &::after {
    content: ' ';
    height: 2px;
    width: 80%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.01) 0%,
      #f5f5f5 50%,
      #f5f5f5 51%,
      rgba(255, 255, 255, 0.01) 100%
    );
    display: block;
    margin: 10px auto;
  }
`

export default function Header() {
  return (
    <header>
      <StyledHeading>2020 Countdown to Kickoff</StyledHeading>
    </header>
  )
}
