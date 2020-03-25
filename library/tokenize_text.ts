import {Command} from './command'

const COMMAND_TOKENIZER = /(\w+)\s*(.*)/;

export default (text: string): [Command, string[]?] => {
    if (!text || !text.length) {
        return [Command['NOOP']]
    }
    const [, cmd, args] = COMMAND_TOKENIZER.exec(text);

    if (!cmd || !Command[cmd.toUpperCase()]) {
        return [Command['NOOP']]
    }

    return [Command[cmd.toUpperCase()], args.split(' ')]
}
