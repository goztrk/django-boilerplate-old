import { ActionFunction, LoaderFunction } from 'react-router-dom';

export type Element = () => JSX.Element;
export type Module = {
  default: Element;
  loader: LoaderFunction;
  action: ActionFunction;
  catch: Element;
};

export type BaseRoute = {
  id?: string;
  path?: string;
  children?: BaseRoute[];
} & Record<string, unknown>;
