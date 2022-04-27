const Reader = require("./../../lib/utils/Reader");

describe("Unit Test for static method in Reader" , () => {

    test("Read the file and create an array of objects" , () => {
        // el path del archivo se manda con base a la carpeta principal porque ahi esta la carpeta
        // node_modules en este caso
        //  misionjs_semana4_refactoring -> ./  ,  siendo el path -> ./app/explorers.json
        const explorers = Reader.readJsonFile("./app/explorers.json");

        expect(explorers).not.toBeUndefined();
        expect(typeof explorers).toBe("object");
    });

});