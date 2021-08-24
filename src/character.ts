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
        console.log("You did "+uAttack+" damage." +enemy.name+ " life was : "+enemy.healthpoints+".")
        enemy.healthpoints = enemy.healthpoints - uAttack;
        if ( enemy.healthpoints <= 0){
            enemy.healthpoints = 0;
            console.log(enemy.name+ "\'s life is know at : "+enemy.healthpoints)
            console.log(enemy.name+ " is dead. Congrats !")
        }else {
            console.log(enemy.name+ "\'s life is know at : "+(enemy.healthpoints))
            console.log(enemy.name+" attack you in return")
            enemy.attack(this)
        }
    }
}
export {Character};