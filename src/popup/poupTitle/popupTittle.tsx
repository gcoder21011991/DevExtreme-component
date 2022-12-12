import React from 'react';
import logo from '../gogleLogo.png';
import './popupTittle.css';

const popupTittleLogoStyle = {
  width: '30em',
  height: '30em' //todo почему не принимает em и rem
}
const PopupTittle = () => {
  return (
    <div className={'header_container'}>
      <p>There will be tittle text</p>
      <img className={'popup_title_logo'} alt={'logo'} src={logo} />
    </div>
  );
};

export default PopupTittle;