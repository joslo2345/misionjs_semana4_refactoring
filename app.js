const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers);

// Part 2: Get the explorers in node mission
const explorersInNode = ExplorerService.filterByMission(explorers,"node");
//console.log(explorersInNode);

// Part 3: Get the quantity of explorers in node mission
const numberOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers,"node");
//console.log(numberOfExplorersInNode);

// Part4: Get the explorer's usernames in Node
const explorersUsernamesInNode = ExplorerService.getExplorerUsernamesByMission(explorers,"node");
//console.log(explorersUsernamesInNode);

/* Part 5: Get a list of the explorers in node, 
if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, 
if is just divisible by 5 set the property trcik and the value BUZZ, 
if is just divisible by 3 set the property trick and the value FIZZ, 
otherwise set the property trick and the score value. TODO */

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => FizzbuzzService.applyValidationInExplorer(explorer));
console.log(explorersInNodeAndFizzBuzzTrick);