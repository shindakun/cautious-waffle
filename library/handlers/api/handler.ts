import { AxiosResponse } from 'axios'
import { SlashCommand } from '../../slash_command'
import { getOpenDnDClient } from './open_dnd_client'
import parseArguments from './parse_arguments'

export default async (cmd: SlashCommand) => {
  let [subcmd, parameter] = parseArguments(cmd.arguments)
  let client = getOpenDnDClient()
  let resp: AxiosResponse = await client.getInfo(subcmd, parameter)

  return JSON.stringify(resp.data)
}
