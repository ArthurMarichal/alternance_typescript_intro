import {Character} from "./character";
import {Fighter} from "./Interface/fighter";

class Enemy implements Fighter <Character>{
    /*
    Typage
     */
    name: string;
    healthpoints: number;

    /*
    Constructeur
     */
    constructor() {
        this.name = "Diablotin"
        this.healthpoints = 20
    }
    /*
    Méthode
     */
    // @ts-ignore
    attack(fighter: Character){
        let eAttack = Math.floor(Math.random() * 100)
        console.log(fighter.name+" did "+eAttack+" damage." +this.name+ " life was : "+this.healthpoints+".")
        this.takeDamage(eAttack);
        if ( this.healthpoints <= 0){
            this.healthpoints = 0;
            console.log(this.name+ "\'s life is know at : "+this.healthpoints)
            console.log(this.name+ " is dead.")
        }else {
            console.log(this.name+ "\'s life is know at : "+(this.healthpoints))
            fighter.attack(this)
        }
    }
    takeDamage(eAttack: number): any {
        this.healthpoints = this.healthpoints - eAttack;
    }
}
export {Enemy};