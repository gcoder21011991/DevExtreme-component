import React from 'react';
import {
  Popup
} from 'devextreme-react/popup';

import './popupContetntStyles.css';

type PopUpPropsType = {
  isVisible: boolean;
}
export function PopupExample(props: PopUpPropsType) {
  return (
    <div>
      <Popup id="popup">
        {/* Configuration goes here */}
      </Popup>
    </div>
  );
}

