class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.city = 'Dhaka'
    }
}

let student1 = new Student('Asif',26);
let student2 = new Student('Hasan',28);
let student3 = new Student('Jahid',23);
// console.log(student1); 
// console.log(student2); 
// console.log(student3);
console.log(student3.name);





//inheritance

class Parent{
    constructor(){
        this.firstName = 'Lionel'
    
    }
 }

class child extends Parent{
    constructor(lastName){
        super()
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let player1 = new child('Messi');
let player2 = new child('messi jr');
console.log(player1.getFullName());
console.log(player2);





