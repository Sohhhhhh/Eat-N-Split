import React from 'react';
import ReactDOM from 'react-dom/client';

// @ts-ignore: ignore missing module or type declarations for CSS import
import './index.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
