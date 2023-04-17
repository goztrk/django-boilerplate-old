import React from 'react';
import ReactDOM from 'react-dom/client';

import 'vite/modulepreload-polyfill';

import { generateRoutes, Routes } from '~/core/Routes';

const container = document.getElementById('app') as HTMLDivElement;
const root = ReactDOM.createRoot(container);

const { routes } = generateRoutes('home');

root.render(<Routes routes={routes} />);
