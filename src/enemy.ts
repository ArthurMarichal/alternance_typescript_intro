import {Character} from "./character";

class Enemy{
    name: string;
    healthpoints: number;

    constructor() {
        this.name = "Diablotin"
        this.healthpoints = 20
    }
    attack(character: Character){
        let eAttack = Math.floor(Math.random() * 100)
        console.log(this.name+" did "+eAttack+" damage." +character.name+ " life was : "+character.healthpoints+".")
        character.healthpoints = character.healthpoints - eAttack;
        if ( character.healthpoints <= 0){
            character.healthpoints = 0;
            console.log(character.name+ "\'s life is know at : "+character.healthpoints)
            console.log(character.name+ " is dead. You lose !")
        }else {
            console.log(character.name+ "\'s life is know at : "+(character.healthpoints))
        }
    }
}
export {Enemy};