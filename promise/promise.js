 console.log(`Hello`);

 let completePromise = true;
const promise1 = new Promise((resolve,reject)=>{
        if(!completePromise){
            resolve(`Completed promise 1`);

        }else{
            reject(new Error(`Not completed promise 1`));
        }
});



const promise2 = new Promise((resolve,reject)=>{
    resolve(`Completed promise 2`)
})



promise1
.then(res=>console.log(res))
// .catch(err=>console.log(err)
.catch(err=>console.log(err.message))



promise2.then(res => console.log(res));



//all promise print

// Promise.all([promise1,promise2])
// .then(([res1,res2])=>console.log(res1,res2)); //destructuring res1,res2


console.log(`Bye`);




//promise race


const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Completed promise 3`)
    },2000);
});

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Completed promise 4`)
    },1000);
});

Promise.race([promise3,promise4])
.then(res=>console.log(res));