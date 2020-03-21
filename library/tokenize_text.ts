export enum Command {
  HELP = 'HELP',
  API = 'API',
  NOOP = 'NOOP'
}

const COMMAND_TOKENIZER = /(\w+)\s*(.*)/

export default (text: string): [Command, string?] => {
  if (!text || !text.length) {
    return [Command['NOOP']]
  }
  let [, cmd, args] = COMMAND_TOKENIZER.exec(text)

  return [Command[cmd.toUpperCase()], args]
}
