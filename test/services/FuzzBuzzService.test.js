const FizzbuzzService = require("../../lib/services/FizzBuzzService");

describe("Test para fizzbuzz service", () => {
    test("Requerimento 1: obtener el trick de un explorer", () => {
        const explorer = { name: "Explorer1", score: 1 };
        const test1 = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(test1.trick).toBe(1);
    }),
    test("Requerimento 2: obtener 'fizz'", () => {
        const explorer = { name: "Explorer3", score: 3 };
        const test2 = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(test2.trick).toBe("FIZZ");
    }),
    test("Requerimento 3: obtener 'buzz'", () => {
        const explorer = { name: "Explorer5", score: 5 };
        const test3 = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(test3.trick).toBe("BUZZ");
    }),
    test("Requerimento 4: obtener 'fizzbuzz'", () => {
        const explorer = { name: "Explorer15", score: 15 };
        const test4 = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(test4.trick).toBe("FIZZBUZZ");
    }),
    test("Requerimento 5: obtener fizz de applyValidationInNumber", () => {
        const fizzbuzznumber = 3;
        const test5 = FizzbuzzService.applyValidationInNumber(fizzbuzznumber);
        expect(test5.score).toBe(fizzbuzznumber)
        expect(test5.trick).toBe("FIZZ");
    }),
    test("Requerimento 6: obtener buzz de applyValidationInNumber", () => {
        const fizzbuzznumber = 5;
        const test6 = FizzbuzzService.applyValidationInNumber(fizzbuzznumber);
        expect(test6.score).toBe(fizzbuzznumber)
        expect(test6.trick).toBe("BUZZ");
    }),
    test("Requerimento 7: obtener fizzbuzz de applyValidationInNumber", () => {
        const fizzbuzznumber = 15;
        const test7 = FizzbuzzService.applyValidationInNumber(fizzbuzznumber);
        expect(test7.score).toBe(fizzbuzznumber)
        expect(test7.trick).toBe("FIZZBUZZ");
    }),
    test("Requerimento 8: obtener trick de applyValidationInNumber", () => {
        const fizzbuzznumber = 16;
        const test8 = FizzbuzzService.applyValidationInNumber(fizzbuzznumber);
        expect(test8.score).toBe(fizzbuzznumber)
        expect(test8.trick).toBe(fizzbuzznumber);
    });
});