import Modals from './Modals';
import Routes from './Routes';
import { Module } from './types';
import { buildRoute, generateRoutesRaw } from './utils';

const ALL_PRESERVED = import.meta.glob<Module>('/apps/*/pages/(_app|404).tsx', { eager: true });
const ALL_MODALS = import.meta.glob<Module>('/apps/*/pages/**/[+]*.tsx', { eager: true });
const ALL_ROUTES = import.meta.glob<Module>(['/apps/*/pages/**/[\\w[-]*.tsx', '!**/(_app|404).*'], {
  eager: true,
});

export function generateRoutes(app: string) {
  return generateRoutesRaw(app, ALL_PRESERVED, ALL_MODALS, ALL_ROUTES, buildRoute);
}

export { Modals, Routes };
