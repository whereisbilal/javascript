// Objects

// Defining a function inside an object
// const para1 = document.getElementById("para1");
// const para2 = document.getElementById("para2");

// const employee = {
//   caluTax() {
//     console.log("Tax rate is 10%");
//   },
// };

// const karanArjun = {
//   salary: 50000,
// };

// const amir = {
//   salary: 30000,
//   caluTax() {
//     console.log("Tax rate is 10%");
//   },
// };

// const anwar = {
//   salary: 40000,
// };

// const kabir = {
//   salary: 80000,
// };

// karanArjun.__proto__ = employee;
// amir.__proto__ = employee;
// anwar.__proto__ = employee;
// kabir.__proto__ = employee;

// console.log(kabir, anwar, karanArjun, amir);

// para1.textContent = `Kabir salary is: ${kabir.salary}`;
// para2.textContent = `Amir salary is: ${amir.salary}`;

// const box = document.querySelector("#box");

// console.log(box.textContent);

// Classes

class toyotaCar {
  start() {
    console.log("start");
  }

  stop() {
    console.log("stop");
  }
}

let fortuner = new toyotaCar();
let bmw = new toyotaCar();



console.log(fortuner.stop);
console.log(fortuner.start);

console.log(bmw.stop);
console.log(bmw.start);