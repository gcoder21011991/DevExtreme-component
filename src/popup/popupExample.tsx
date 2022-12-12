import React from 'react';
import {
  Popup
} from 'devextreme-react/popup';
import {popupContent} from "./poupContent/popupContent";

import './popupContetntStyles.css';
import PopupTittle from "./poupTitle/popupTittle";

type PopUpPropsType = {
  isVisible: boolean;
  togglePopup: () => void;
}
export function PopupExample(props: PopUpPropsType) {
  return (
    <div>
      <Popup
        id="popup"
        maxWidth={'37.5rem'}
        maxHeight={'67.7rem'}
        resizeEnabled
        visible={props.isVisible}
        contentRender={popupContent}
        onHiding={props.togglePopup}
        closeOnOutsideClick={true}
        titleRender={() => <PopupTittle/>}
        position={'center'}
        dragEnabled
      />
    </div>
  );
}
//todo  dragEnabled doesn't work
