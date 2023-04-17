import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

type Props = {
  routes: Partial<RouteObject>[];
};

export default function Routes({ routes }: Props) {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}
