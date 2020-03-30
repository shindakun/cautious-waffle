import help from "../help";
import {
  defaultSlashCommand,
  helpForHelpSlashCommand,
  helpForNoopSlashCommand,
} from "../../../fixtures/slash_fixture";

describe("help", () => {
  it("should return for api", async () => {
    expect(await help(defaultSlashCommand)).toMatchInlineSnapshot(`"spells"`);
  });
  it("should return for help", async () => {
    expect(await help(helpForHelpSlashCommand)).toMatchInlineSnapshot(
      `"Get help with commands"`
    );
  });
  it("should return for noop", async () => {
    expect(await help(helpForNoopSlashCommand)).toMatchInlineSnapshot(
      {
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text:
                "No help defined for command noop\n Valid commands are HELP, API, NOOP, ROLL",
            },
          },
        ],
      },
      `
Object {
  "blocks": Array [
    Object {
      "text": Object {
        "text": "No help defined for command noop
 Valid commands are HELP, API, NOOP, ROLL",
        "type": "mrkdwn",
      },
      "type": "section",
    },
  ],
}
`
    );
  });
});
