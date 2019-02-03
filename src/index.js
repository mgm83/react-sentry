import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

const RELEASE = '0.1.0';
if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        dsn: 'https://aa85197fc11a4bbb9b2fa638e9c55c78@sentry.io/1385366',
        release: RELEASE,
        beforeSend(event) {
            // Check if it is an exception, if so, show the report dialog
            if (event.exception) {
              Sentry.showReportDialog({
                  'title': 'Ups! Algo no ha salido bien...'
              })
            }
            return event;
        }
    });
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
