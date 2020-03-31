import { SlashCommand } from '../library/slash_command'
import { Command } from '../library/command'

export const defaultSlashCommand: SlashCommand = {
  command: Command['HELP'],
  arguments: ['api', 'spells'],
  team_domain: 'krumpasclub.slack.com',
  team_id: '1',
  user_id: '2',
  user_name: 'movetype fly'
};

export const helpForHelpSlashCommand: SlashCommand = {
  command: Command['HELP'],
  arguments: ['help'],
  team_domain: 'krumpasclub.slack.com',
  team_id: '1',
  user_id: '2',
  user_name: 'movetype fly'
};

export const helpForNoopSlashCommand: SlashCommand = {
  command: Command['HELP'],
  arguments: ['noop'],
  team_domain: 'krumpasclub.slack.com',
  team_id: '1',
  user_id: '2',
  user_name: 'movetype fly'
};

export const rollForRollSlashCommand: SlashCommand = {
  command: Command['ROLL'],
  arguments: ['2d20'],
  team_domain: 'krumpasclub.slack.com',
  team_id: '1',
  user_id: '2',
  user_name: 'movetype fly'
};
