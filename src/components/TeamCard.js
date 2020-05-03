import React from 'react';

export default function TeamCard({teamName, teamLogoUrl}) {
  return (
    <div className="team-card">
      <h2>{teamName}</h2>
      <img src={`${teamLogoUrl}`} alt={`${teamName} Logo`} />
    </div>
  );
}
