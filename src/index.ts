const prompts = require('prompts');
import {Character} from "./character";
import {Enemy} from "./enemy";
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
    },
    {
        type: 'number',
        name: 'combat',
        message: 'Would you fight him (1) or fight back (you will lose the game) (2) ?'

    }
];
(async () => {
    const response = await prompts(questions);

    let character = new Character(response.gender,response.username);
    let enemy = new Enemy()
    var ename = enemy.name;

    console.log(character.summary())
    console.log("No time for break, an enemy has already approaching.")
    if (questions[2].SELECT === 1)
    console.log( ename +" find you !")
    console.log("You hit "+ename+" with "+character.attack(enemy)+" damage")

})();
