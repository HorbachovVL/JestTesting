const {sum} = require('./index');

test('Sum should return  sum of two numbers', () => {
    expect(sum(1, 3)).toBe(4);
});