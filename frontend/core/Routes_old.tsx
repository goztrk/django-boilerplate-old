import React from 'react';
import {
  ActionFunction,
  createBrowserRouter,
  LoaderFunction,
  Outlet,
  RouteObject,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import {
  generateModalRoutes,
  generatePreservedRoutes,
  generateRegularRoutes,
} from '@generouted/react-router/core';

type Element = () => JSX.Element;
type Module = { default: Element; loader: LoaderFunction; action: ActionFunction; catch: Element };

const PRESERVED = import.meta.glob<Module>('/apps/*/pages/(_app|404).{jsx,tsx}', {
  eager: true,
});
const MODALS = import.meta.glob<Pick<Module, 'default'>>('/apps/*/pages/**/[+]*.{jsx,tsx}', {
  eager: true,
});
const ROUTES = import.meta.glob<Module>(
  ['/apps/*/pages/**/[\\w[-]*.{jsx,tsx}', '!**/(_app|404).*'],
  {
    eager: true,
  }
);

const test = Object.entries(ROUTES).reduce((obj, item) => {
  const key = item[0].replace('/apps/home/pages/', '');
  obj[key] = item[1];
  return obj;
}, {});

const preservedRoutes = generatePreservedRoutes<Element>(PRESERVED);
const modalRoutes = generateModalRoutes(MODALS);

const regularRoutes = generateRegularRoutes<RouteObject, Partial<Module>>(test, (module, key) => {
  const index =
    /index\.(jsx|tsx)$/.test(key) && !key.includes('pages/index') ? { index: true } : {};

  return {
    ...index,
    Component: module?.default,
    ErrorBoundary: module?.catch,
    loader: module?.loader,
    action: module?.action,
  };
});

console.log(ROUTES, regularRoutes, test);

const App = preservedRoutes?._app || Outlet;
const NotFound = preservedRoutes?.['404'] || React.Fragment;

export const routes = [
  { element: <App />, children: [...regularRoutes, { path: '*', element: <NotFound /> }] },
];
export function Routes() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export function Modals() {
  const current = useLocation().state?.modal;
  const Modal = modalRoutes[current] || React.Fragment;
  return <Modal />;
}
