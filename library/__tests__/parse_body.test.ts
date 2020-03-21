import parseBody from '../parse_body'
import { slashCommand } from '@slack-wrench/fixtures'
import { stringify } from 'querystring'

describe('parseBody', () => {
  it('should handle empty text', () => {
    let cmd = stringify(slashCommand('/waffle'))
    let [, slash] = parseBody(cmd)
    expect(slash.command).toBe('NOOP')
  })
  it('should handle no argument help text', () => {
    let cmd = stringify(slashCommand('/waffle', { text: 'help me' }))
    let [, slash] = parseBody(cmd)
    expect(slash.command).toEqual('HELP')
  })
})
