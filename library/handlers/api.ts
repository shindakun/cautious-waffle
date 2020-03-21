import { SlashCommand } from '../slash_command'

export default (cmd: SlashCommand) => {
  return 'api ' + cmd.arguments
}
