import {optionsToParams} from '~utilities/routes';
import {ID, PaginatedPath} from '~types/common';

export const BASE_PATH = '/internal';

// organizations
export const organizationsIndexPath = (options: PaginatedPath) =>
  `/internal/organizations${optionsToParams(options)}`;
export const organizationsCreatePath = () => `/internal/organizations`;
export const organizationsShowPath = (id: ID) =>
  `/internal/organizations/${id}`;
export const organizationsUpdatePath = (id: ID) =>
  `/internal/organizations/${id}`;

// users
interface UsersIndexPath extends PaginatedPath {
  search?: string;
  include?: 'organization';
}

export const usersIndexPath = (options: UsersIndexPath) =>
  `/internal/users${optionsToParams(options)}`;
export const usersShowPath = (id: ID) => `/internal/users/${id}`;
