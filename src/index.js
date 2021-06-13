import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as typeformEmbed from '@typeform/embed';
import{ FirebaseAppProvider} from 'reactfire'
import firebaseConfig from'./firebase-config'
ReactDOM.render(
  ( <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
    </FirebaseAppProvider>),
  document.getElementById('root')
);