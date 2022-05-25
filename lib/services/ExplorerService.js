class ExplorerService {
    static filterByMission(explorer, mission){
        const filterByMission = explorer.filter((explorer) => explorer.mission == mission)
        return filterByMission
    }

    static getAmountOfExplorersByMission(explorer,mission){
        const getAmountOfExplorersByMission = explorer.filter((explorer) => explorer.mission == mission)
        return getAmountOfExplorersByMission.length
    }

    static getExplorersUsernameByMission(explorer, mission){
        const explorersInNodeToGetUsernames = explorer.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}

module.exports = ExplorerService