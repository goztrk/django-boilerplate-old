import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  generateModalRoutes,
  generatePreservedRoutes,
  generateRegularRoutes,
} from '@generouted/react-router/core';

import { BaseRoute, Element, Module } from './types';

export function filterAppModules(modules: Record<string, Partial<Module>>, app: string) {
  const dir = `/apps/${app}/pages/`;
  return Object.keys(modules)
    .filter((x) => x.startsWith(dir))
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key.replace(dir, '')] = modules[key];
      return obj;
    }, {} as Record<string, Partial<Module>>);
}

export function buildRoute(module: Partial<Module>, key: string): BaseRoute {
  const index = /index\.tsx$/.test(key) && !key.includes('pages/index') ? { index: true } : {};

  return {
    ...index,
    Component: module?.default,
    ErrorBoundary: module?.catch,
    loader: module?.loader,
    action: module?.action,
  };
}

export function generateRoutesRaw(
  app: string,
  preserved: Record<string, Module>,
  modals: Record<string, Pick<Module, 'default'>>,
  routes: Record<string, Module>,
  callback: (module: Partial<Module>, key: string) => BaseRoute
) {
  const preservedRoutes = generatePreservedRoutes(filterAppModules(preserved, app));
  const modalRoutes = generateModalRoutes(filterAppModules(modals, app));
  const regularRoutes = generateRegularRoutes(filterAppModules(routes, app), callback);

  // eslint-disable-next-line @typescript-eslint/dot-notation
  const App = (preservedRoutes?.['_app'] as Element) || Outlet;
  const NotFound = (preservedRoutes?.['404'] as Element) || React.Fragment;

  return {
    routes: [
      {
        element: <App />,
        children: [...regularRoutes, { path: '*', element: <NotFound /> }],
      },
    ],
    modalRoutes,
  };
}
