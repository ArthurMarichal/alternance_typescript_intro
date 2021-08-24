import {Enemy} from "./enemy";
class Character{


    gender: string;
    name: string;
    healthpoints: number;


    constructor(gender: string, name: string) {
        this.gender = gender;
        this.name = name;
        this.healthpoints = 100;
    };
    summary(){
        console.log("You choose "+this.gender+" as gender, " +this.name+" for the name and you have "+this.healthpoints+ " health points.")
    }
    attack(enemy: Enemy){
        let uAttack = Math.floor(Math.random() * 100)
        let eHp = enemy.healthpoints;
        let result = eHp-uAttack;
        if (result <= 0){
            result = 0
        }
        console.log("You did "+uAttack+" damage. The "+enemy.name+"'s life was : "+eHp+". They are know at : "+result)
    }
}
export {Character};