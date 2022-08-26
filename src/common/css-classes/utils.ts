import { Schema } from './schema';

export const shouldExactClassesMatch = (el: JQuery<HTMLElement>, classes: string, enable: boolean) => {
  if (!enable) {
    return el;
  }
  const elClasses = generateSelector(el.attr('class') || '').split('.').filter(s => !!s);
  const expectedClasses = classes.split('.').filter(s => !!s);

  const sameLength = elClasses.length === expectedClasses.length;
  const sameValues = elClasses.every(c => expectedClasses.includes(c));
  expect(sameLength, `${elClasses.join(',')} not matched to ${expectedClasses.join(',')}`).to.be.true;
  expect(sameValues).to.be.true;
  return el;
};

export const mergeSchemas = <T extends Schema>(source: T, target: T): T => {
  const keys = Object.keys(source) as (keyof T)[];
  return keys.reduce((acc, key) => {
    const value = source[key];
    const targetValue = target[key];

    if (typeof targetValue !== typeof value) {
      throw 'Schema dismatched';
    }

    if (typeof value === 'string') {
      return {
        ...acc,
        [key]: `${targetValue}${value}`
      }
    }

    return {
      ...acc,
      [key]: mergeSchemas(value, targetValue as Schema)
    }
  }, {} as T);
};

export const pathSchema = <T extends Schema>(obj: T, classPrefix = ''): T => {
  const keys = Object.keys(obj) as (keyof T)[];
  return keys.reduce((acc, key) => {
    const value = obj[key];
    if (typeof value === 'string') {
      return {
        ...acc,
        [key]: generateSelector(value, classPrefix)
      }
    }
    return {
      ...acc,
      [key]: pathSchema(value, classPrefix)
    }
  }, {} as T);
};

const generateSelector = (str: string, classPrefix = '') => str
  .trim()
  .split(' ')
  .map(s => s.trim())
  .filter(s => !!s)
  .map(s => `.${classPrefix}${s}`)
  .join('');
