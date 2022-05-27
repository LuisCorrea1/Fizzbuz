const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Test for ExplorerService", () => {
    test("Requirement 1: Get all explorers in node", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});