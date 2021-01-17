import { snakeCase } from 'snake-case';
export function optionsToParams(options) {
    var params = [];
    Object.keys(options).map(function (key) {
        if (Array.isArray(options[key])) {
            params.push(options[key].map(function (val) { return snakeCase(key) + "[]=" + val; }).join('&'));
        }
        else if (options[key]) {
            params.push(snakeCase(key) + "=" + options[key]);
        }
    });
    if (params.length === 0) {
        return '';
    }
    return "?" + params.join('&');
}
