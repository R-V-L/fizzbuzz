const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");
const FizzbuzzService = require("../../lib/services/FizzBuzzService");
const explorers = Reader.readJsonFile("explorers.json");

describe("Test para explorer service", () => {
    test("Requerimento 1: calcular todos los explorers en una mision", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
    }),
    test("Requerimento 2: calcular la cantidad de explorers por mision", () => {
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInMission).toBe(10);
    }),
    test("Requerimento 3: obtener los nombres de usuario por mision", () => {
        const explorersUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernamesInMission.length).toBe(10);
    });
});

describe("Test para fizzbuzz service", () => {
    test("Requerimento 1: obtener el trick de un explorer", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const test1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(test1.trick).toBe(1);
    }),
    test("Requerimento 2: obtener 'fizz'", () => {
        const explorer5 = { name: "Explorer3", score: 3 };
        const test2 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(test2.trick).toBe("FIZZ");
    }),
    test("Requerimento 3: obtener 'buzz'", () => {
        const explorer3 = { name: "Explorer3", score: 5 };
        const test3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(test3.trick).toBe("BUZZ");
    }),
    test("Requerimento 4: obtener 'fizzbuzz'", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const test4 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(test4.trick).toBe("FIZZBUZZ");
    });
});