import { exampleAlgorithm } from '../src/index';

test('exampleAlgorithm sorts numbers in ascending order', () => {
  const input = [5, 3, 1, 4, 2];
  const output = exampleAlgorithm(input);
  expect(output).toEqual([1, 2, 3, 4, 5]);
});
