import { AxiosResponse } from 'axios'
import { SlashCommand } from '../../slash_command'
import { getOpenDnDClient } from './open_dnd_client'

const EMPTY_STRING = "";

export default async (cmd: SlashCommand) => {
  const subcmd = cmd.arguments.length > 0 ? cmd.arguments[0] : EMPTY_STRING;
  const parameter = cmd.arguments.length > 1 ? cmd.arguments[1] : EMPTY_STRING;
  const client = getOpenDnDClient();
  try {
    const resp: AxiosResponse = await client.getInfo(subcmd, parameter);

    if (resp.data.count) {
      let options = resp.data.results.map(result => ({
        text: {
          type: 'plain_text',
          text: result.name
        },
        value: result.url
      }))
      return {
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: 'Pick to show a'
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
    }
    return JSON.stringify(resp.data)
  } catch (e) {
    return 'Error: ' + e.message
  }
}

const handlerHelp = async (cmd: string[]) => cmd.join(' ');
const handlerRoll = async (cmd: string[]) => cmd.join(' ');

export { handlerHelp, handlerRoll }
