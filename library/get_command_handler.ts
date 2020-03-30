import { Command } from './command'
import helpHandler from './handlers/help'
import apiHandler from './handlers/api/handler'
import characterHandler from './handlers/character/handler'

export default (cmd: Command) => {
  switch (cmd) {
    case 'API':
      return apiHandler;
    case 'CHARACTER':
      return characterHandler;
    case 'HELP':
    case 'NOOP':
    default:
      return helpHandler
  }
}
