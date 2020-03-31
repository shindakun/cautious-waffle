import roll from '../roll';
import {
    rollForRollSlashCommand
  } from "../../../fixtures/slash_fixture";

describe("roll", () => {
    it("should return with the correct pattern", async () => {
        expect(await roll(rollForRollSlashCommand)).toMatch(new RegExp(/^((\d+\s\+\s)+\d+\s\=\s\d+)|(\d+)$/));
    });

})