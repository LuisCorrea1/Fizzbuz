const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");

const explorers = Reader.readJsonFile("explorers.json"); 
//console.log(explorers)
// Return a list of explorers from explorers.json

console.log(ExplorerService.filterByMission(explorers,"node"));
console.log("Explorers in node: " + ExplorerService.getAmountOfExplorersByMission(explorers,"node"));
console.log(ExplorerService.getExplorersUsernameByMission(explorers,"node"));