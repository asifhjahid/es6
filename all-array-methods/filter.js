let numbers = [2,3,5,1,5,6,9,10,15,30,20];

let number = numbers.filter((num,index,arr) => {
      
    //   console.log(index);
    //   console.log(arr);
      return num>9;
});

console.log(number);
console.log(numbers);                                                                                                                                    