import { characteres } from "../../src/js-foundation/02-destructuring";


describe("s-foundation/02-destructuring.ts", () => {

    test("Characters should containt Flash, Superman", () =>{

        expect(characteres).toContain('Flash');
        expect(characteres).toContain('Superman')
    });

    test("First character should be Flash, and second Superman", () =>{

        const [Flash, Superman] = characteres;

        expect(Flash).toBe('Flash');
        expect(Superman).toBe('Superman');
    })
})
