// let num1 = [10,20,30];
// let num2 = [2,3,4];
// let num3 = [40,50,60];
// let allNumbers =[...num1,...num2,5,...num3];
// console.log(allNumbers);


// //maximum value 

// let values = [300,400,200,500,8000,6000,];
// let result = Math.max(...values);
// console.log(result);


//object spreading


const person1={
    name:'Asif',
    age:26,
    city:"Dhaka"
}


const person2={
    name2:'Hasan',
    age2:29,
    city2:"Jashore"
}

let result = {...person1,...person2};
console.log(result);