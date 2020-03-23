import { AxiosResponse } from 'axios'
import { SlashCommand } from '../../slash_command'
import { getOpenDnDClient } from './open_dnd_client'
import parseArguments from './parse_arguments'

export default async (cmd: SlashCommand) => {
  const [subcmd, parameter] = parseArguments(cmd.arguments)
  const client = getOpenDnDClient()
  try {
    const resp: AxiosResponse = await client.getInfo(subcmd, parameter)

    if (resp.data.count) {
      let options = resp.data.results.map(result => ({
        text: {
          type: 'plain_text',
          text: result.name
        },
        value: result.url
      }))
      return [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: 'Pick to show a result:'
          },
          accessory: {
            type: 'static_select',
            placeholder: {
              type: 'plain_text',
              text: 'Select an item',
              emoji: true
            },
            options
          }
        }
      ]
    }
    return JSON.stringify(resp.data)
  } catch (e) {
    return 'Error: ' + e.message
  }
}
