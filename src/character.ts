import {Enemy} from "./enemy";
import {Fighter} from "./Interface/fighter";

export abstract class Character implements Fighter<Enemy>{
    /*
    Définition des types
     */

    gender: string;
    name: string;
    healthpoints: number;
    damage: number;

    /*
    Constructeur
     */

    constructor(gender: string, name: string) {
        this.gender = gender;
        this.name = name;
        this.healthpoints = 100;
        this.damage = 0;
    };

    /*
    Méthodes
     */
    summary() {
        console.log("You choose " + this.gender + " as gender, " + this.name + " for the name and you have " + this.healthpoints + " health points."+ this.damage)
    }

    // @ts-ignore
    attack(fighter: Enemy) {
        let damage = Math.floor(Math.random() * 100)
        console.log(fighter.name+" did "+damage+" damage." +this.name+ " life was : "+this.healthpoints+".")
        this.takeDamage(damage);
        if ( this.healthpoints <= 0){
            this.healthpoints = 0;
            console.log(this.name+ "\'s life is know at : "+this.healthpoints)
            console.log(this.name+ " is dead. You lose !")
        }else {
            console.log(this.name+ "\'s life is know at : "+(this.healthpoints))
        }
    }
    takeDamage(damage: number): any {
        this.healthpoints = this.healthpoints - damage * 0.5;
        console.log("You have 50% damage reduction.")
    }


}