import React from 'react'
import './Button.css';

function Button(props) {
  return (
    <button title={props.text} className={`button ${props.class}`}>{props.text}</button>
  )
}

export default Button