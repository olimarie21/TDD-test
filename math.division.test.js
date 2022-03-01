const { division } = require('./division');

test ('10 / 2 = 5', () => {
    expect(division(10,2)).toBe(5)
});

test.each([[21, 3, 7], [12, 4, 3], [0, 2, 0]]) (
    'a / b = c', (a, b, expected) => {
        expect(division(a,b)).toBe(expected)
    }
)
