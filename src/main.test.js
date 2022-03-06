const { main } = require('./main');

describe('Main function', () => {
    it('All 1s gives 1', () => {
        expect(main(1, 1, 1, 1)).toBe(1);
    })
})
