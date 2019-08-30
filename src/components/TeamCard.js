import React from 'react';

export default function TeamCard(props) {
  return (
    <div className="team-card">
      <h2>{props.teamName}</h2>
      <img src={`${props.teamLogoUrl}`} alt={`${props.teamName} Logo`} />
    </div>
  );
}
