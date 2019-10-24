import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'fonts/MuseoSansRounded-300.otf';
import 'fonts/MuseoSansRounded-500.otf';
import 'fonts/MuseoSansRounded-700.otf';
import 'fonts/MuseoSansRounded-900.otf';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
