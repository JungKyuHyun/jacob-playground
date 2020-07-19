import { HOME_PAGE } from './Url';
import { RouteProps } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';

export const ROUTES: RouteProps[] = [
  {
    exact: true,
    path: HOME_PAGE,
    component: HomePage,
  },
];
