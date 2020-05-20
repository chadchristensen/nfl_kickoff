import React from 'react'

export default function DateDisplay({ kickoff }) {
  return (
    <h2>
      {new Date(kickoff).toLocaleString('en-us', {
        dateStyle: 'full',
        timeStyle: 'short'
      })}
    </h2>

  )
}
