import get_command_handler from '../get_command_handler'
import { Command } from '../command'
import help from '../handlers/help'
import api from '../handlers/api/handler'

describe('get_command_handler', () => {
  it('should handle api', () => {
    const handler = get_command_handler(Command['API'])
    expect(handler).toEqual(api)
  })
  it('should handle help', () => {
    const handler = get_command_handler(Command['HELP'])
    expect(handler).toEqual(help)
  })
  it('should show help for noop', () => {
    const handler = get_command_handler(Command['NOOP'])
    expect(handler).toEqual(help)
  })
  it('should show help for undefined', () => {
    const handler = get_command_handler(Command['???'])
    expect(handler).toEqual(help)
  })
})
