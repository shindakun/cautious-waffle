import help from "../help";
import { defaultSlashCommand } from "../../../fixtures/slash_fixture";

describe("help", () => {
  it("should return", () => {
    expect(help(defaultSlashCommand)).toMatchInlineSnapshot(
      `"help api spells"`
    );
  });
});
