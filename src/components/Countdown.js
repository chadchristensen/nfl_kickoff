import React from 'react';
import h from '../helpers';
import ClockSection from './ClockSection.js';

export default function Countdown({ kickoff }) {
  return (
    <div className="countdown-timer">
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
    </div>
  );
}
