import {Enemy} from "./enemy";
class Character{


    gender: string;
    name: string;
    healthpoints: number;
    attackpower: number;


    constructor(gender: string, name: string) {
        this.gender = gender;
        this.name = name;
        this.healthpoints = 100;
        this.attackpower = Math.floor(Math.random() * 100)
    };
    summary(){
        return "You choose "+this.gender+" as gender, " +this.name+" for the name and you have "+this.healthpoints+ " health points.";
    }
    attack(enemy: Enemy){
       return  this.attackpower
    }
}
export {Character};