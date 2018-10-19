import React from 'react';
import ReactDOM from 'react-dom';
import './Component/include/jquery.js'
// eslint-disable-next-line
import reset from './css/reset.css';
import Cmong from './Cmong';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Cmong />, document.getElementById('root'));
registerServiceWorker();
