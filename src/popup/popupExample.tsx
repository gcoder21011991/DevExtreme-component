import React from 'react';
import {
  Popup
} from 'devextreme-react/popup';
import {popupContent} from "./poupContent/popupContent";

import './popupContetntStyles.css';

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
        resizeEnabled={true}
        visible={props.isVisible}
        contentRender={popupContent}
        onHiding={props.togglePopup}
        closeOnOutsideClick={true}
        // showTitle
        // title={'Tittle will be soon...'}
        titleRender={() => <div>Tittle will be soon...with render</div>}
      />
    </div>
  );
}

