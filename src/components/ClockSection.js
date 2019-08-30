import React from 'react';

export default function ClockSection({ value, label }) {
  return (
    <div>
      <div className="time-value">{value}</div>
      <div className="time-label">{label.toUpperCase()}</div>
    </div>
  );
}
