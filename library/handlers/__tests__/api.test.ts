import api from '../api'
import { defaultSlashCommand } from '../../../fixtures/slash_fixture'

describe('api', () => {
  it('should return', () => {
    expect(api(defaultSlashCommand)).toMatchInlineSnapshot(`"api api spells"`)
  })
})
