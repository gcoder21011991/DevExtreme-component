import React, {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import themes from "devextreme/ui/themes";

themes.current('generic.darkmoon');
themes.initialized(() => ReactDOM.render(<App />, document.getElementById("root")))
// ReactDOM.render(<App />, document.getElementById("root"))

