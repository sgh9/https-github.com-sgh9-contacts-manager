import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import ContactsContextProvider from './context/ContextProvider';

import App from './App';

ReactDOM.render(
  <ContactsContextProvider>
    <App />
  </ContactsContextProvider>,
  document.getElementById('root')
);
