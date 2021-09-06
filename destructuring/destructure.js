//object destructuring


const person ={
    name1:'asif',
    age:24,
    salary:20000,
    info:{
        address:'Dhaka',
        phone:'01616',
    }

}

const {name1,salary} = person;
const {address,phone} = person.info;
// const {info:{address},info:{phone}} = person;
console.log(name1,salary);
console.log(address,phone);


//array destructuring

const person2 = ['asif','hasan','jahid','dhrubo'];

const[firstName,...nextAllNames]=person2;

const [,secondIndex,,lastIndex] = person2; //print hasan and dhrubo

console.log(secondIndex,lastIndex);
console.log(firstName,nextAllNames);



//value swap

let a = 10;
let b = 20;
[b,a] = [a,b];
console.log(a,b);