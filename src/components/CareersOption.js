import React from 'react'
import Button from './Button'
function CareersOption({title, location}) {
  return (
    <section className="careers-option">
    <section className="careers-option__title">
      <span className="career-title">{title}</span>
      <span>{location}</span>
    </section>
    <Button text="Apply"/>
  </section>
  )
}

export default CareersOption