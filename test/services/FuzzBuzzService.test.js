const FizzbuzzService = require("../../lib/services/FizzBuzzService");

describe("Test para fizzbuzz service", () => {
    test("Requerimento 1: obtener el trick de un explorer", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const test1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(test1.trick).toBe(1);
    }),
    test("Requerimento 2: obtener 'fizz'", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const test2 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(test2.trick).toBe("FIZZ");
    }),
    test("Requerimento 3: obtener 'buzz'", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const test3 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(test3.trick).toBe("BUZZ");
    }),
    test("Requerimento 4: obtener 'fizzbuzz'", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const test4 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(test4.trick).toBe("FIZZBUZZ");
    });
});