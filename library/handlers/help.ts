import { SlashCommand } from '../slash_command'

export default async (cmd: SlashCommand) => {
  return 'help ' + cmd.arguments
}
