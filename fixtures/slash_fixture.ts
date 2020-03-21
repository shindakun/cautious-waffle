import { SlashCommand } from '../library/slash_command'
import { Command } from '../library/command'

export const defaultSlashCommand: SlashCommand = {
  command: Command['HELP'],
  arguments: 'api spells',
  team_domain: 'krumpasclub.slack.com',
  team_id: '1',
  user_id: '2',
  user_name: 'movetype fly'
}
