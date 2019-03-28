import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const pp = React.createElement('p', null, 'proba');
// console.log(pp);

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(pp, document.getElementById('root'));

serviceWorker.unregister();
