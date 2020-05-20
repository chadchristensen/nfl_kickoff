import React from 'react'

export default function ConditionalComponent({ condition, children }) {
  return (
    <>
      {
        condition === true
          ? children
          : null
      }
    </>
  )
}
