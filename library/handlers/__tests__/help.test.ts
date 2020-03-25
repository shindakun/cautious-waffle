import help from '../help'
import { defaultSlashCommand, helpForHelpSlashCommand, helpForNoopSlashCommand } from '../../../fixtures/slash_fixture'

describe('help', () => {
  it('should return for api', async () => {
    expect(await help(defaultSlashCommand)).toMatchInlineSnapshot(
      `"spells"`
    )
  });
  it('should return for help', async () => {
    expect(await help(helpForHelpSlashCommand)).toMatchInlineSnapshot(
        `"Get help with commands"`
    )
  });
  it('should return for noop', async () => {
    expect(await help(helpForNoopSlashCommand)).toMatchInlineSnapshot(
        `"No help defined for command noop"`
    )
  });
});
