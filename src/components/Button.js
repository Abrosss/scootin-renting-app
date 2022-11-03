import React from 'react'


function Button(props) {
  return (
    <button title={props.text} className={`button ${props.class}`}>{props.text}</button>
  )
}

export default Button