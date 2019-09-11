const flatten = require('./flatten-array');

// Check against an array with single nesting
it('Check simple nested array', () => {
    expect(flatten([1, [2, 3], 4, [5]])).toStrictEqual([ 1, 2, 3, 4, 5 ])
})

// Check against an array with double nesting
it('Check double nested array', () => {
    expect(flatten([[[1, 2, [3]], 4, 5], [6, 7], [8]])).toStrictEqual([ 1, 2, 3, 4, 5, 6, 7, 8 ])
})

// Check against an array with triple nesting
it('Check triple nested array', () => {
    expect(flatten([[[[1,2],3,[4,5,[6],7],8],9],10,11])).toStrictEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ])
})