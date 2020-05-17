export default class School {
    constructor(){
        this.list = [];
        this.factory = new Factory();
    }
    add(person){
        this.list.push(person);
    }
}