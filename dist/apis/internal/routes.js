import { optionsToParams } from '~utilities/routes';
export const BASE_PATH = '/internal';
// organizations
export const organizationsIndexPath = (options) => `/internal/organizations${optionsToParams(options)}`;
export const organizationsCreatePath = () => `/internal/organizations`;
export const organizationsShowPath = (id) => `/internal/organizations/${id}`;
export const organizationsUpdatePath = (id) => `/internal/organizations/${id}`;
export const usersIndexPath = (options) => `/internal/users${optionsToParams(options)}`;
export const usersShowPath = (id) => `/internal/users/${id}`;
