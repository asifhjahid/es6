const taskOne = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(`Task 1 is completed`)
    })
}

const taskTwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`Task 2 is completed`)
        },3000)
    })
}

const taskThree = ()=>{
    return new Promise((resolve,reject)=>{
        reject(`Task 3 is not completed`)
    })
}

const taskFour = ()=>{
    return new Promise((resolve,reject)=>{
        resolve(`Task 4 is completed`)
    })
}



// async function allTask(){
//     const task1 = await taskOne();
//     console.log(task1);
// }



const allTask = async ()=>{
   
        try{
        const task1 = await taskOne();
        console.log(task1);
        const task2 = await taskTwo();
        console.log(task2);
        const task3 = await taskThree();
        console.log(task3);
        const task4 = await taskFour();
        console.log(task4);
     
        }
        catch(e){
            console.log(e);
        }
}
allTask();