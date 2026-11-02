// function getData(dataId, getNextdata) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resolve("success")
//             // console.log("success");
//             if (getNextdata) {
//                 getNextdata();
//             }
//         }, 2000);
//     })

// };

// // callback

// getData(1, () => {
//     getData(2, () => {
//         getData(3)
//     })
// });

// // Promise nested

// getData(1).then(() => {
//     getData(2).then((res) => {
//         console.log(res);
//     })
// })

// // Promise chainning

// getData(1)
//     .then(() => {
//         return getData(2)
//     })

//     .then(() => {
//         return getData(3)
//     })

//     .then(() => {
//         return getData(4)
//     })

//     .then(() => {
//         return getData(5)
//     })

//     .then((resolve) => {
//         console.log(resolve);
//     })


// // async await
// async function asyncFun() {
//     await getData(1)
//     await getData(2)
//     await getData(3)
//     await getData(4)
//     await getData(5)
// }

// console.log(asyncFun());