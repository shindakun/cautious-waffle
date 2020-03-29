import {SlashCommand} from '../../slash_command'
import {setActive, resetActive, getActive} from "../../database/character";
import {helpView} from "../../views/character";

const helpMessages = {missingArgs: "Too few arguments"};

export default async (cmd: SlashCommand) => {
    const dbKey = `${cmd.team_domain}-${cmd.team_id}-${cmd.user_id}`;
    switch (cmd.arguments[0].toUpperCase()) {
        case('SET'):
            if (!cmd.arguments[1])
                return helpMessages.missingArgs;
            try {
                await setActive(dbKey, cmd.arguments[1]);
                return `Set ${dbKey} current character to ${cmd.arguments[1]}`
            } catch (e) {
                return e;
            }
        case('RESET'):
            try {
                await resetActive(dbKey);
                return `Reset character for ${dbKey}`
            } catch (e) {
                return e;
            }
        default:
            return getActive(dbKey).then(data => data).then(data => data);
    }
}

const handlerHelp = async (_cmd: string[]) => helpView(
    'Shows active character.\nSET [character] to set active character for user.\nRESET to clear active character.'
);

export {handlerHelp}