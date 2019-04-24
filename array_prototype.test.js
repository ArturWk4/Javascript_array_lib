let functions = require('./array_prototype');


test('[1,2,3,4,5] should be reversed to [5,4,3,2,1]', () => {
  expect(functions.reverse.call([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});