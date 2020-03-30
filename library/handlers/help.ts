import {SlashCommand} from '../slash_command'
import {Command} from "../command";
import helpView from '../views/help';
import {handlerHelp as apiHandlerHelp} from "./api/handler";
import {handlerHelp as characterHandlerHelp} from './character/handler'

export default async (cmd: SlashCommand) => {
    switch (cmd.arguments[0].toUpperCase()) {
        case 'API':
            return apiHandlerHelp(cmd.arguments.slice(1));
        case 'CHARACTER':
            return characterHandlerHelp(cmd.arguments.slice(1));
        case 'HELP':
            return 'Get help with commands';
        case '':
            return 'HELP requires arguments';
        default:
            return handlerHelp(cmd.arguments);
    }
}

const handlerHelp = async (cmd: string[]) => helpView(`No help defined for command ${cmd[0]}\n Valid commands are ${Object.keys(Command).join(', ')}`);

export {handlerHelp}
