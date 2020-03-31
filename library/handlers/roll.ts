import {SlashCommand} from '../slash_command';

export default async (cmd: SlashCommand) => {
   // const handlerRoll = async (dice: string) => {
    let dice = cmd.arguments[0],
        [times , sides] = dice.split('d'),
        output = []; 
    for (let i = 0; i < +times; i++) {
        output.push(Math.floor((Math.random() * +sides) + 1));
    }
    if (output.length === 1) {
        return `${output[0]}`
    }
    let opStr = output.map( n => `${n} +` ).join(' ').slice(0, -2);             
    return `${opStr} = ${output.reduce((a,b) => a + b, 0)}`
 
}



