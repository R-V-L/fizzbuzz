const ExplorerService = require("../services/ExplorerService");
const FizzBuzzService = require("../services/FizzBuzzService");
const Reader = require("../utils/Reader");

const explorers = Reader.readJsonFile("explorers.json");

class ExplorerController {
    static getExplorersByMission(mission) {       
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission;
    }
    static getExplorersUsernamesByMission(mission) {
        const explorersUsernamesInMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernamesInMission;
    }
    static getExplorersAmonutByMission(mission) {
        const explorersAmountInMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountInMission;
    }
}

module.exports = ExplorerController;