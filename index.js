const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const explorers = Reader.readJsonFile("explorers.json");

//console.log(explorers);
//console.log(ExplorerService.filterByMission(explorers, "java"));

//console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));

//console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));

const FizzbuzzService = require("./lib/services/FizzBuzzService");

const explorer1 = { name: "Explorer1", score: 1 };
const test1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
console.log(test1);

const explorer3 = { name: "Explorer3", score: 3 };
const test2 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
console.log(test2);

const explorer5 = { name: "Explorer5", score: 5 };
const test3 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
console.log(test3);

const explorer15 = { name: "Explorer15", score: 15 };
const test4 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
console.log(test4);