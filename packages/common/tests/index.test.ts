import { deepClone, isEmpty } from '../src/index';

describe('common', () => {
  test('deepClone creates a deep copy of an object', () => {
    const original = { a: 1, b: { c: 2 } };
    const copy = deepClone(original);
    expect(copy).toEqual(original);
    expect(copy).not.toBe(original);
    expect(copy.b).not.toBe(original.b);
  });

  test('isEmpty returns true for empty objects', () => {
    const emptyObj = {};
    expect(isEmpty(emptyObj)).toBe(true);
  });

  test('isEmpty returns false for non-empty objects', () => {
    const nonEmptyObj = { a: 1 };
    expect(isEmpty(nonEmptyObj)).toBe(false);
  });
});
