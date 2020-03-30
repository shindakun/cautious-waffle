import { Command } from './command'
import helpHandler from './handlers/help'
import rollHandler from './handlers/roll'
import apiHandler from './handlers/api/handler'

export default (cmd: Command) => {
  switch (cmd) {
    case 'API':
      return apiHandler
    case 'ROLL':
      return rollHandler
    case 'HELP':
    case 'NOOP':
    default:
      return helpHandler
  }
}
