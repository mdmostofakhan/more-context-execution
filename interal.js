// // i++ vs ++i
// // x++ vs ++x

// console.log(1)
// console.log(2)
// let num = 0;
// const intervalId = setInterval(()=>{
//     num++;
//     console.log(num)
//     if(num === 10){
//         clearInterval(intervalId);
//     }

// },1000)
// console.log(4)
// console.log(5)
// console.log(6)


// console.log(1)
// console.log(2)
// let num = 0;
// const intervalId = setInterval(()=>{
//   console.log(num)
//   num++;
//   if(num=== 10){
//     clearInterval(intervalId)
//   }
// }, 1000)
// console.log(4)
// console.log(5)
// console.log(6)


console.log(1)
console.log(2)
let num = 0;
const indtervalId = setInterval(()=>{
    console.log(num);
    num++;
    if(num=== 10){
      clearInterval(indtervalId);
    }
    // else{
    //     console.log('new')
    // }
}, 1000)
console.log(4)
console.log(5)
console.log(6)

console.log("first")
setTimeout(() => {
    console.log("second")
}, 1000)
console.log("third")