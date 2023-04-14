import 'vite/modulepreload-polyfill';
import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('app') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    Hello World
  </React.StrictMode>
);
