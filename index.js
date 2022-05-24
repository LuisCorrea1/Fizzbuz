const Reader = require("./lib/utils/Reader");
const explorers = Reader.readJsonFile("explorers.json"); 
console.log(explorers)
// Return a list of explorers from explorers.json