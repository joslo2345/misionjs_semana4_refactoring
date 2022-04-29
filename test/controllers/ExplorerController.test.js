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

    test('Return FIZZ if number divisible by 3 , BUZZ if number divisible by 5 , FIZZBUZZ if number disivible by 15, and number if not divisible by 3 or 5 or 15',
    () => {
        const number1 = 3;
        const result1 = ExplorerController.getTrickForNumber(number1);
        expect(typeof result1).toBe('string');
        expect(result1).toBe('FIZZ');

        const number2 = 5;
        const result2 = ExplorerController.getTrickForNumber(number2);
        expect(typeof result2).toBe('string');
        expect(result2).toBe('BUZZ');

        const number3 = 15;
        const result3 = ExplorerController.getTrickForNumber(number3);
        expect(typeof result3).toBe('string');
        expect(result3).toBe('FIZZBUZZ');

        const number4 = 7;
        const result4 = ExplorerController.getTrickForNumber(number4);
        expect(typeof result4).toBe('number');
        expect(result4).toBe(7);
    });

});