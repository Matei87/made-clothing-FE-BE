import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);
