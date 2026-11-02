// console.log("One");
// console.log("Two");

// setTimeout(()=>{
//     console.log("hello");
// }, 4000)

// console.log("Three");
// console.log("Four");

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumcallback) {
//     sumcallback(a, b)
// }

// calculator(1+ 2);
 

// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello, 3000); 
// function clickAge() {
//     const age = Number(prompt("Enter your age"));

//     if (age >= 18) {
//         if (age >= 60) {
//             console.log("senior");
//         } else {
//             console.log("adult");
//         }
//     } else {
//         console.log("child");
//     }
// }


function getData(dataId, getNextdata) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Data", dataId);
            res("success")
            rej("rejected")
            if (getNextdata) {
                getNextdata();
            }
        }, 2000);
    })

};


// async function getPromisedata() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }

(async function () {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}
)();



// Nested Promise
// getData(1)
//     .then(() => {
//         getData(2)
//             .then((res) => {
//                 console.log(res);
//             })
//     })



// Promise chaining
// getData(1)
//     .then((res) => {
//         return getData(2)
//     })

//     .then((res) => {
//         return getData(3)
//     })

//     .then((res) => {
//         return getData(4)
//     })
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((rej) => {
//         console.log(rej);
//     })



// Nested Callbacks
// getData(1, () => {
//     console.log("genreting data 2....");
//     getData(2, () => {
//         console.log("genreting data 3....");

//         getData(3, () => {
//             console.log("genreting data 4....");

//             getData(4, () => {
//                 console.log("genreting data 5....");

//                 getData(5, () => {
//                     console.log("genreting data 6....");

//                     getData(6, () => {
//                         console.log("genreting data 7....");

//                         getData(7, () => {
//                             console.log("genreting data 8....");

//                             getData(8, () => {
//                                 console.log("genreting data 9....");

//                                 getData(9, () => {
//                                     console.log("genreting data 10....");

//                                     getData(10)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });










// let promise = new Promise((resolve, reject) => {
//     console.log("I ama a promise");
//     resolve("success");
//     reject("some eror")
// })


// function getdata(dataId) {
//     return new Promise((resolve, resject) => {
//         setTimeout(() => {
//             console.log("Data", dataId);
//             resject("error")
//         }, 5000);
//     })
// };



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am promise");
//         resolve("success")
//         // reject("error")
//     });
// }

// const promise = getPromise()
//     .then((res) => {
//         console.log("promise fulfilled", res);

//     })
//     .catch((reject) => {
//         console.log(reject);

//     })



// function asyncFunc1() {
//     return new Promise((resolve, resject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success")
//         }, 4000);
//     })
// };

// function asyncFunc2() {
//     return new Promise((resolve, resject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success")
//         }, 4000);
//     })
// };


// function asyncFunc3() {
//     return new Promise((resolve, resject) => {
//         setTimeout(() => {
//             console.log("data3");
//             resolve("success")
//         }, 4000);
//     })
// };

// console.log("Fatching data1.....");
// asyncFunc1()
//     .then(() => {
//         console.log("Fatching data2.....");
//         asyncFunc2()
//             .then(() => {
//                 console.log("Fatching data3.....");
//                 asyncFunc3()
//                     .then(() => { }).catch((err) => {
//                         console.log(err);
//                     });
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }).catch((err) => {
//         console.log(err);
//     });