const getData = new Promise((resovle, reject)=>{

        const num = Math.random()*10;
        console.log(num);
        if(num < 5){
            resovle(456666);
        }
        else{
            reject('No Data')
        }
    })

getData
.then(data => console.log(data +14))
.catch(err => console.error('ERR:', err))


// const promiseData = new Promise((resolve, reject)=>{
//     const num = Math.random()*10;
//     console.log(num);
//     if(num < 5){
//         resolve(43443)
//     }
//     else{
//         reject('no data entry')
//     }
    
    
// })

// promiseData.
//             then(data => console.log(data))
//             .catch(err =>console.error(err))
            