import {snakeCase} from 'snake-case';

export interface Param {
  [key: string]: any;
}

export function optionsToParams(options: Param) {
  const params: any[] = [];

  Object.keys(options).map((key) => {
    if (Array.isArray(options[key])) {
      params.push(
        options[key].map((val: any) => `${snakeCase(key)}[]=${val}`).join('&'),
      );
    } else if (options[key]) {
      params.push(`${snakeCase(key)}=${options[key]}`);
    }
  });

  if (params.length === 0) {
    return '';
  }

  return `?${params.join('&')}`;
}
