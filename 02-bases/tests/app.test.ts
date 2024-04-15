
describe('Test in the app file', () => {

    test('should be true', () => {

        // 1. Arrange

        const num1 = 10;
        const num2 = 20;

        // 2. Act

        const resultado = num1 + num2;

        // 3. Assert

        expect(resultado).toBe(30)

        
        // expect(true).toBe(true);

    });

});