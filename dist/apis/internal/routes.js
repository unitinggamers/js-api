import { optionsToParams } from '~utilities/routes';
export var BASE_PATH = '/internal';
// organizations
export var organizationsIndexPath = function (options) {
    return "/internal/organizations" + optionsToParams(options);
};
export var organizationsCreatePath = function () { return "/internal/organizations"; };
export var organizationsShowPath = function (id) {
    return "/internal/organizations/" + id;
};
export var organizationsUpdatePath = function (id) {
    return "/internal/organizations/" + id;
};
export var usersIndexPath = function (options) {
    return "/internal/users" + optionsToParams(options);
};
export var usersShowPath = function (id) { return "/internal/users/" + id; };
