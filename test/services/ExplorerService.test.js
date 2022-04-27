const ExplorerService = require("./../../lib/services/ExplorerService");
const Reader = require("./../../lib/utils/Reader");

describe("Unit Test for static methods in ExplorerService" , () => {
    
    test("Get array with explorers in mission 'node' " , () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const explorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(explorersInNode).not.toBeUndefined();
        expect(typeof explorersInNode).toBe("object");
        expect(explorersInNode[0].mission).toBe("node");
    });

    test("Get the quantity of explorers in node mission", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
        expect(typeof numberOfExplorersInNode).toBe("number");
        expect(numberOfExplorersInNode).toBe(10);
    });

    test("get usernamers of the explorers in 'node' mission ", () => {
        const explorers = Reader.readJsonFile("./app/explorers.json");
        const explorersUsernamesInNode = ExplorerService.getExplorerUsernamesByMission(explorers,"node");
        expect(explorersUsernamesInNode).not.toBeUndefined();
        expect(typeof explorersUsernamesInNode).toBe("object");
        expect(explorersUsernamesInNode[0]).toBe("ajolonauta1");
    });

});