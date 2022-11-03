import React from 'react'
import AppStoreLogo from '../assets/images/app-store.svg';

function Button() {
  return (
    <button title='Appstore' className='button-social'><img src={AppStoreLogo}></img></button>
  )
}

export default Button