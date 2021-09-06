const persons = [
    {
        name:'Asif',
        age:28,
    },
    {
        name:'Hasan',
        age:30,
    },
    {
        name:'Jahid',
        age:20,
    },
]

//print those name whose age greater than 25

const person = persons.filter(element => element.age>25).map(value=>value.name);
console.log(person);


