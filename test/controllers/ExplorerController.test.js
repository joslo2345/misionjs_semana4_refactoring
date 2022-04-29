const ExplorerController = require("./../../lib/controllers/ExplorerController");


describe("Unit Test for static methods in ExplorerController" , () => {
    
    test("Get array with explorers in mission 'node' " , () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode).not.toBeUndefined();
        expect(typeof explorersInNode).toBe("object");
        expect(explorersInNode[0].mission).toBe("node");
    });

    test("Get array with explorers in mission 'java' " , () => {
        const explorersInJava = ExplorerController.getExplorersByMission("java");
        expect(explorersInJava).not.toBeUndefined();
        expect(typeof explorersInJava).toBe("object");
        expect(explorersInJava[0].mission).toBe("java");
    });

    test("Get the quantity of explorers in node mission", () => {
        const numberOfExplorersInNode = ExplorerController.getExplorersAmountByMission("node");
        expect(typeof numberOfExplorersInNode).toBe("number");
        expect(numberOfExplorersInNode).toBe(10);
    });

    test("Get the quantity of explorers in java mission", () => {
        const numberOfExplorersInJava = ExplorerController.getExplorersAmountByMission("java");
        expect(typeof numberOfExplorersInJava).toBe("number");
        expect(numberOfExplorersInJava).toBe(5);
    });

    test("get usernamers of the explorers in 'node' mission ", () => {
        const explorersUsernamesInNode = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernamesInNode).not.toBeUndefined();
        expect(typeof explorersUsernamesInNode).toBe("object");
        expect(explorersUsernamesInNode[0]).toBe("ajolonauta1");
    });

    test("get usernamers of the explorers in 'java' mission ", () => {
        const explorersUsernamesInJava = ExplorerController.getExplorersUsernamesByMission("java");
        expect(explorersUsernamesInJava).not.toBeUndefined();
        expect(typeof explorersUsernamesInJava).toBe("object");
        expect(explorersUsernamesInJava[0]).toBe("ajolonauta6");
    });


});