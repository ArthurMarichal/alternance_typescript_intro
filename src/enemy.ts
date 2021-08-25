import {Character} from "./character";
import {Fighter} from "./Interface/fighter";

export class Enemy implements Fighter <Character>{
    /*
    Typage
     */
    name: string;
    healthpoints: number;
    damage: number;

    /*
    Constructeur
     */
    constructor() {
        this.name = "Diablotin"
        this.healthpoints = 20
        this.damage = 0
    }
    /*
    Méthode
     */
    // @ts-ignore
    attack(fighter: Character){
        let damage = Math.floor(Math.random() * 100)
        console.log(fighter.name+" did "+damage+" damage." +this.name+ " life was : "+this.healthpoints+".")
        this.takeDamage(damage);
        if ( this.healthpoints <= 0){
            this.healthpoints = 0;
            console.log(this.name+ "\'s life is know at : "+this.healthpoints)
            console.log(this.name+ " is dead.")
        }else {
            console.log(this.name+ "\'s life is know at : "+(this.healthpoints))
            fighter.attack(this)
        }
    }
    takeDamage(damage: number): any {
        this.healthpoints = this.healthpoints - damage;
    }
}