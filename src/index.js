// istanbul ignore file
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './common/AppRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
