import { defaultSlashCommand } from "../../../../fixtures/slash_fixture";
import handler from "../handler";
import axios from "axios";
import { mocked } from "ts-jest/utils";

jest.mock("axios");
// here the whole foo var is mocked deeply
const mockAxios = mocked(axios, true);

describe("api handler", () => {
  it("should handle happy", async () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({ data: { desc: "A fireball spell!" } })
    );

    const cmd = {
      ...defaultSlashCommand,
      text: "api spell fireball"
    };
    expect(await handler(cmd)).toMatchInlineSnapshot(
      `"{\\"desc\\":\\"A fireball spell!\\"}"`
    );
  });
});
