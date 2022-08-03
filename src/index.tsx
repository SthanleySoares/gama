import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.Fragment>
    <Home />
  </React.Fragment>
);

