import { Command } from './command'

export type SlashCommand = {
  command: Command
  arguments: string
  team_id: string
  team_domain: string
  user_id: string
  user_name: string
}
