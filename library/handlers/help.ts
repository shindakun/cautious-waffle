import {SlashCommand} from '../slash_command'
import {handlerHelp as apiHandlerHelp} from "./api/handler";

export default async (cmd: SlashCommand) => {

    if (cmd.arguments) {
        switch (cmd.arguments[0].toUpperCase()) {
            case 'API':
                return apiHandlerHelp(cmd.arguments.slice(1));
            case 'HELP':
                return 'Get help with commands';
            default:
                return handlerHelp(cmd.arguments);
        }
    }
    return 'HELP requires arguments'
}

const handlerHelp = async (cmd: string[]) => `No help defined for command ${cmd[0]}`;

export {handlerHelp}
