let numbers = [1,9,3,4];

let sum = numbers.reduce((prevValue,currentValue)=>{
    return prevValue + currentValue;
},10)

console.log(sum);
