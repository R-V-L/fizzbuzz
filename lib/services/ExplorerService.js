class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersByMission = { mission: mission };
        explorersByMission.quantity = (explorers.filter((explorer) => explorer.mission == mission)).length;
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(explorers, mission) {
        const ExplorersUsernamesByMission = { mission: mission };
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        ExplorersUsernamesByMission.explorers = usernamesInNode;
        return ExplorersUsernamesByMission;
    }
}

module.exports = ExplorerService;