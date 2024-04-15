import { getAge } from "../../src/plugins/get-age.plugin";

describe('plugins/get-age.plugin.ts', () => {
    
    test('getAge() should return the age of a person' , () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect( typeof age).toBe('number')
    });

    test('getAge should return current age', () => {

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        const calculeAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculeAge)
    });

    test('getAge should return 0 year', () => {

        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1965);

        const birthdate = '1985-10-21';
        const age = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalledWith()
    })
})