import React from 'react';
import styled from 'styled-components';

const TimeValue = styled.div`
  color: #ff0000;
  text-shadow: 0px 0 5px #ec3636;
  font-size: 3.75em;

  @media(max-width: 820px) {
    font-size: 3.5em;
  }

  @media(max-width: 425px) {
    font-size: 2.5em;
  }
`;

const TimeLabel = styled.div`
  font-weight: bold;
`

export default function ClockSection({ value, label }) {
  return (
    <div>
      <TimeValue>{value}</TimeValue>
      <TimeLabel>{label.toUpperCase()}</TimeLabel>
    </div>
  );
}
