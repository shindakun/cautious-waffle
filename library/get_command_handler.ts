import { Command } from './command'
import helpHandler from './handlers/help'
import apiHandler from './handlers/api'

export default (cmd: Command) => {
  switch (cmd) {
    case 'API':
      return apiHandler
    case 'HELP':
    case 'NOOP':
    default:
      return helpHandler
  }
}
