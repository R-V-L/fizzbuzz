const ExplorerService = require("../../lib/services/ExplorerService");

const explorers = [{ mission: "node", githubUsername: "ajolonauta1" }, { mission: "java", githubUsername: "ajolonauta2" }, { mission: "node", githubUsername: "ajolonauta3" }];

describe("Test para explorer service", () => {
    test("Requerimento 1: calcular todos los explorers en una mision", () => {
        const mission = "node"
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        expect(explorersInNode.length).toBe(2);
    }),
    test("Requerimento 2: calcular la cantidad de explorers por mision", () => {
        const mission = "java"
        const explorersInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        expect(explorersInMission.mission).toBe(mission);
        expect(explorersInMission.quantity).toBe(1);
    }),
    test("Requerimento 3: obtener los nombres de usuario por mision", () => {
        const mission = "node"
        const explorersUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        expect(explorersUsernamesInMission.mission).toBe(mission);
        expect(explorersUsernamesInMission.explorers.length).toBe(2);
    });
});