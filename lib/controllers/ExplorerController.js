const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("app/explorers.json");
        const explorersInMission = ExplorerService.filterByMission(explorers,mission);
        return explorersInMission;
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("app/explorers.json");
        const explorersUsernamesInMission = ExplorerService.getExplorerUsernamesByMission(explorers,mission);
        return explorersUsernamesInMission;
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("app/explorers.json");
        const explorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers,mission);
        return explorersAmountByMission;
    }
}

module.exports = ExplorerController;