export class Person{
    //public name: string;
    //public address: string;

    constructor(public firstName: string, public lastName: string, private address: string = 'No Address') {}
}

/*export class Hero extends Person{
    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string,
    ){
        super(realName, 'Gotham')} 
}*/

export class Hero{
    //public person: Person; 
    
    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}

const bruce = new Person('Bruce','Wayne','Gotham')
const batman = new Hero('Batman',45,'Bruce',bruce);

console.log(batman);
console.log(bruce);