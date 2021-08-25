import {Character} from "./character";

const prompts = require('prompts');
import {Warrior} from "./warrior";
import {Enemy} from "./enemy";
import {Wizard} from "./wizard";
/*
Déclarations des prompts (Leur types, leurs noms, les messages à affichés, les éventuels choix)
 */

const startQuestions = [
    {
      type: 'select',
      name: 'class',
      message: 'What class do you want ?',
      choices: [
          {title: 'Warrior', value: 'warrior'},
          {title: 'Wizard', value: 'wizard'}
      ]
    },
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
/*
Fonction asynchrone afin que le joueur puisse intéragir
 */

(async () => {

    const response = await prompts(startQuestions);
if (response.class == 'warrior'){
    let character = new Warrior(response.gender, response.username);
    initiate(character)
}else if (response.class == 'wizard'){
    let character = new Wizard(response.gender, response.username);
    initiate(character)
}
    async function initiate(character: Character) {
        character.summary();
        let enemy = new Enemy()
        console.log("No time for break, an enemy is already approaching.")
        console.log(enemy.name + " find you !")
        const fightResponse = await prompts(fight)
        while (enemy.healthpoints > 0 && character.healthpoints > 0) {
            if (fightResponse.combat == 1) {
                console.log("You decided to fight " + enemy.name + ".")
                enemy.attack(character)
                console.log(character.healthpoints)
                console.log(enemy.healthpoints)
            } else if (fightResponse.combat == 2) {
                console.log("You are a chicken ! You lose !")
                break;
            }
        }
    }
})();

