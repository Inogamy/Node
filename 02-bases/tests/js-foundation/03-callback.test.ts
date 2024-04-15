import { getUserById } from "../../src/js-foundation/03-callback";


describe("js-foundation/03-callback.ts", () => {

    test("getUserByID should return an error if user does not exist", (done) => {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`);
            
            expect(user).toBeUndefined()

            

            done();
        })

        
    });

    test("getUserByID should retur John Doe", (done) => {

        const id = 1;
        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual(
                {
                    id: 1,
                    name: 'John Doe'
                })
            done();
        });
    });

})
