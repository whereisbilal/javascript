console.log("hello");

function name(b) {
    console.log("hello world " + b);
}

name("bilal");

// const harry = ()=>{
//     console.log("ju");

// }

// harry()

const add = (a, b) => {
    if (!a) {
        throw new Error("a value is not defined");
    }

    else if (!b) {
        throw new Error("b value is not defined");
    }
    return a + b
}

console.log(add("h ", "hye"));



function divide(a, b) {
    if (b === 0) {
        throw new Error("0 se divide nahi kar sakte");
    }

    return a / b;
}

const result = divide(10, 1);

console.log(result);


// const harry = function (a, b) {
//     return a + b
// }

// console.log(harry);


