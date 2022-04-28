const ExplorerService = require("../../lib/services/ExplorerService");

const explorers = [{ mission: "node", githubUsername: "ajolonauta1" }, { mission: "java", githubUsername: "ajolonauta2" }, { mission: "node", githubUsername: "ajolonauta3" }];

describe("Test para explorer service", () => {
    test("Requerimento 1: calcular todos los explorers en una mision", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    }),
    test("Requerimento 2: calcular la cantidad de explorers por mision", () => {
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(explorersInMission).toBe(1);
    }),
    test("Requerimento 3: obtener los nombres de usuario por mision", () => {
        const explorersUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernamesInMission.length).toBe(2);
    });
});