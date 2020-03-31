import { Command } from './command'
import helpHandler from './handlers/help'
import rollHandler from './handlers/roll'
import apiHandler from './handlers/api/handler'
import characterHandler from './handlers/character/handler'

export default (cmd: Command) => {
  switch (cmd) {
    case 'API':
      return apiHandler;
    case 'ROLL':
      return rollHandler;
    case 'CHARACTER':
      return characterHandler;
    case 'HELP':
    case 'NOOP':
    default:
      return helpHandler
  }
}
