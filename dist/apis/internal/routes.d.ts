import { ID, PaginatedPath } from '~types/common';
export declare const BASE_PATH = "/internal";
export declare const organizationsIndexPath: (options: PaginatedPath) => string;
export declare const organizationsCreatePath: () => string;
export declare const organizationsShowPath: (id: ID) => string;
export declare const organizationsUpdatePath: (id: ID) => string;
interface UsersIndexPath extends PaginatedPath {
    search?: string;
    include?: 'organization';
}
export declare const usersIndexPath: (options: UsersIndexPath) => string;
export declare const usersShowPath: (id: ID) => string;
export {};
//# sourceMappingURL=routes.d.ts.map