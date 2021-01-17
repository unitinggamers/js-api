import { snakeCase } from 'snake-case';
export function optionsToParams(options) {
    const params = [];
    Object.keys(options).map((key) => {
        if (Array.isArray(options[key])) {
            params.push(options[key].map((val) => `${snakeCase(key)}[]=${val}`).join('&'));
        }
        else if (options[key]) {
            params.push(`${snakeCase(key)}=${options[key]}`);
        }
    });
    if (params.length === 0) {
        return '';
    }
    return `?${params.join('&')}`;
}
