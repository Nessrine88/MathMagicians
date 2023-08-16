import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Calculator, Display } from './Calculator';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display />
    <Calculator />
  </React.StrictMode>,
);

reportWebVitals();
