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
        let uHp = character.healthpoints;
        let result = uHp-eAttack;
        if (result <= 0){
            result = 0
        }
        console.log("The enemy did "+eAttack+" damage. Your life was : "+uHp+". Your life is know at : "+result)
    }
}
export {Enemy};