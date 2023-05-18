import React from 'react'
import './Button.css';
function ButtonSubmit(props) {
  return (
    <button type="submit" onClick={props.func} className={`button ${props.class}`}>{props.text}</button>
  )
}

export default ButtonSubmit