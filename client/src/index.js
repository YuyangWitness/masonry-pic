import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./main";
import en from "react-intl/locale-data/en";
import zh from "react-intl/locale-data/zh";
import { addLocaleData } from "react-intl";

import * as serviceWorker from './serviceWorker';

import './index.css';
import 'antd/dist/antd.css';

addLocaleData([...en, ...zh]);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
