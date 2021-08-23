const prompts = require('prompts');
import {Character} from "./character";
const questions = [
    {
        type: 'text',
        name: 'gender',
        message: 'What is your character\'s gender'
    },
    {
        type: 'text',
        name: 'username',
        message: 'And his/her name ?'
    }
];
(async () => {
    const response = await prompts(questions);
    // => response => { gender, name}
    let character = new Character(response.gender,response.username);
    console.log(character.summary())
})();