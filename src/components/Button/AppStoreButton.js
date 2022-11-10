import React from 'react'
import AppStoreLogo from '../../assets/images/app-store.svg';

function AppStoreButton() {
  return (
    <button title='Appstore' className='button-social'><img alt="app store logo" src={AppStoreLogo}></img></button>
  )
}

export default AppStoreButton