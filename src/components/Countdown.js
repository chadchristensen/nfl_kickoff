import React from 'react';
import h from '../helpers';
import ClockSection from './ClockSection.js';
import styled from 'styled-components';

const CountdownTimer = styled.div`
  font-family: 'digital-7', sans-serif;
  background-color: #222;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #eee;
  border-radius: 2px;

  & > div {
    padding: 1em;
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default function Countdown({ kickoff }) {
  return (
    <CountdownTimer>
      <ClockSection value={h.getDaysFromMilliseconds(kickoff)} label="days" />
      <ClockSection value={h.getHoursFromMilliseconds(kickoff)} label="hours" />
      <ClockSection
        value={h.getMinutesFromMilliseconds(kickoff)}
        label="minutes"
      />
      <ClockSection
        value={h.getSecondsFromMilliseconds(kickoff)}
        label="seconds"
      />
    </CountdownTimer>
  );
}
