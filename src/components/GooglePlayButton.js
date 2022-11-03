import React from 'react'
import GooglePlayLogo from '../assets/images/google-play.svg';


function Button() {
  return (
    <button title='GooglePlay' className='button-social'><img src={GooglePlayLogo}></img></button>
  )
}

export default Button