import React, {useEffect, useState} from 'react';
import './App.css';

import {Button} from "devextreme-react";
import themes from "devextreme/ui/themes";
import {EditorTest} from "./htmlEditor/editorTest";
import {PopupExample} from "./popup/popupExample";

function App() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <Button
        text="Click me"
        onClick={() => setIsVisible(v => !v)}
      />
      <PopupExample isVisible={isVisible}/>
    </div>
  );
}

export default App;
