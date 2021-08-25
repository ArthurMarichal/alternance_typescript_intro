import {Character} from "./character";

export class Wizard extends Character{

    constructor(gender: string,name: string) {
        super(gender,name);
        this.damage = 2
    }
}