const sum = require('./script.js')
// import { sum } from './script.js'; // exemplo usando named imports

test('sums two values', () => {
    expect(sum(2, 3)).toEqual(5)
})
