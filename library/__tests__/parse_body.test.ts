import parseBody from '../parse_body'
import { slashCommand } from '@slack-wrench/fixtures'
import { stringify } from 'querystring'

describe('parseBody', () => {
  it('should handle empty text', () => {
    const cmd = stringify(slashCommand('/waffle'))
    const slash = parseBody(cmd)
    expect(slash.command).toBe('NOOP')
  })
  it('should handle no argument help text', () => {
    const cmd = stringify(slashCommand('/waffle', { text: 'help me' }))
    const slash = parseBody(cmd)
    expect(slash.command).toEqual('HELP')
  })
})
