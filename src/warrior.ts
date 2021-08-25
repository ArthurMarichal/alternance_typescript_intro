import {Character} from "./character";

export class Warrior extends Character{

    constructor(gender: string,name: string) {
        super(gender,name);
        this.healthpoints = 120
    }
}