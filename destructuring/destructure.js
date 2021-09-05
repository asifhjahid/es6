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
console.log(name1,salary);
console.log(address,phone);


//array destructuring

const person2 = ['asif','hasan','jahid','dhrubo'];
const[firstName,...nextAllNames]=person2;
console.log(firstName,nextAllNames);