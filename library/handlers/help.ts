import { SlashCommand } from '../slash_command'

export default (cmd: SlashCommand) => {
  return 'help ' + cmd.arguments
}
