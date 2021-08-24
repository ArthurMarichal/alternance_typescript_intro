const prompts = require('prompts');
import {Character} from "./character";
import {Enemy} from "./enemy";

const startQuestions = [
    {
        type: 'select',
        name: 'gender',
        message: 'What is your character\'s gender',
        choices: [
            {title: 'male', value: "male"},
            {title: 'female', value: "female"}
        ]
    },
    {
        type: 'text',
        name: 'username',
        message: 'And his/her name ?'
    },
];
const fight = [
    {
        type: 'select',
        name: 'combat',
        message: 'Would you fight him or fight back (you will lose the game)?',
        choices: [
            {title: 'Fight !', value: 1},
            {title: 'Fight back !', value: 2}
        ]}
];

(async () => {
    const response = await prompts(startQuestions);


    let character = new Character(response.gender, response.username);
    let enemy = new Enemy()
    var ename = enemy.name;

    character.summary()
    console.log("No time for break, an enemy has already approaching.")
    console.log(ename + " find you !")
    if (enemy.healthpoints != 0) {
        const fightResponse = await prompts(fight)
        if (fightResponse.combat == 1) {
            console.log("You decided to fight " + ename + ".")
            character.attack(enemy)
        } else if (response.combat == 2) {
            console.log("You are a chicken ! You lose !")
        }
    }else {
        console.log(ename+" die. Congrats.")
    }
})();

