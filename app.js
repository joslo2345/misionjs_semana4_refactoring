const Reader = require("./lib/utils/Reader");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");

// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersInNode.length)

// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
//console.log(usernamesInNode)

/* Part 8: Get a list of the explorers in node, 
if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, 
if is just divisible by 5 set the property trcik and the value BUZZ, 
if is just divisible by 3 set the property trick and the value FIZZ, 
otherwise set the property trick and the score value. TODO */

const assignFizzBuzzTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }
    else if (explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    }
    else if (explorer.score%3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    }
    else{
        explorer.trick = explorer.score;
        return explorer;
    }
};

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
console.log(explorersInNodeAndFizzBuzzTrick);