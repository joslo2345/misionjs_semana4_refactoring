const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { response } = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request,response) => {
    const mission = request.params.mission;
    const numberOfExplorersInMission = ExplorerController.getExplorersAmountByMission(mission);
    const result = {
        'mission': mission,
        'quantity': numberOfExplorersInMission
    };
    response.json(result);
});

app.get("/v1/explorers/usernames/:mission", (request,response) => {
    const mission = request.params.mission;
    const usernamesOfExplorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    const result = {
        'mission': mission,
        'explorers': usernamesOfExplorersInMission
    };
    response.json(result);
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});