import { AxiosResponse } from 'axios'
import { SlashCommand } from '../../slash_command'
import { getOpenDnDClient } from './open_dnd_client'
import parseArguments from './parse_arguments'

export default async (cmd: SlashCommand) => {
  const [subcmd, parameter] = parseArguments(cmd.arguments)
  const client = getOpenDnDClient()
  try {
    const resp: AxiosResponse = await client.getInfo(subcmd, parameter)
    return JSON.stringify(resp.data)
  } catch (e) {
    return 'Error: ' + e.message
  }
}
