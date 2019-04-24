let functions = require('./array_prototype');

test('Sequence 1,2,3,4 should be converted to [1,2,3,4]', () => {
  expect(functions.of(1,2,3,4)).toEqual([1,2,3,4]);
});

test('[1,2,3] should be merged with [4,5,6]', () => {
  expect(functions.concat.call([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
});

test('Every item of array should be positive', () => {
  expect(functions.every.call([4,3,1,2,11], item => item > 0)).toBeTruthy();
});

test('Two last item of [1,2,3,4,5] should be set to 9', () => {
  expect(functions.fill.call([1,2,3,4,5], 9, 3)).toEqual([1,2,3,9,9]);
});

test('Filter all positive elements in [11,2,4,-2,12]', () => {
  expect(functions.filter.call([11,2,-4,-2,12], item => item > 0)).toEqual([11,2,12]);
});

test('19 is the first item that greater than 4 in [1,4,2,19,2]', () => {
  expect(functions.find.call([1,4,2,19,2], item => item > 4)).toBe(19);
});

test('2 is the position of first item that less than 9 in [10,12,7,11,1]', () => {
  expect(functions.findIndex.call([10,12,7,11,1], item => item < 9)).toBe(2);
});

test('Element 3 should exist in [1,6,7,3,1]', () => {
  expect(functions.includes.call([1,6,7,3,1], 3)).toBeTruthy();
});

test('Elements of [1,2,3,4] should be joined to [1-2-3-4]', () => {
  expect(functions.join.call([1,2,3,4], '-')).toBe('1-2-3-4');
});

test(`[0,1,2] is indexes of all elements in ['one','two','three']`, () => {
  expect(functions.keys.call(['one','two','three'])).toEqual([0,1,2]);
});

test('Elements in [1,2,3] should be multiplied by 3', () => {
  expect(functions.map.call([1,2,3], item => item * 3)).toEqual([3,6,9]);
});

test('One of [1,2,3,-4,5] should be negative', () => {
  expect(functions.some.call([1,2,3,-4,5], item => item < 0)).toBeTruthy();
});

test('[1,2,3,4,5] should be reversed to [5,4,3,2,1]', () => {
  expect(functions.reverse.call([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});