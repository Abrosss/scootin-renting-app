import React from 'react'

function Card(props) {
  return (
    <div className='telemetry' style={{ flexDirection: props.direction }}>
      <section>
        <h2>{props.header}</h2>
        <p>{props.context}</p>
      </section>
      <section></section>
    </div>
  )
}

export default Card