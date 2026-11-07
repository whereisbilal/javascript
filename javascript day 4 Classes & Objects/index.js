// console.log("hello world");

// Defining a function inside an object
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");

const employee = {
  caluTax() {
    console.log("Tax rate is 10%");
  },
};

const karanArjun = {
  salary: 50000,
};

const amir = {
  salary: 30000,
};

const anwar = {
  salary: 40000,
};

const kabir = {
  salary: 80000,
};

karanArjun.__proto__ = employee;
amir.__proto__ = employee;
anwar.__proto__ = employee;
kabir.__proto__ = employee;

console.log(kabir, anwar, karanArjun, amir);

para1.textContent = `Kabir salary is: ${kabir.salary}`;
para2.textContent = `Amir salary is: ${amir.salary}`;

// const box = document.querySelector("#box");

// console.log(box.textContent);

// console outputs

//  Obj
// {fullName: 'Bilal', age: 19}age: 19fullName: "Bilal"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// Obj.fullName
// 'Bilal'
// Obj.age
// 19
// Obj.abc
// undefined
// Obj.toString
// ƒ toString() { [native code] }

// let arr = ["apple", "mango", "banana"]
// undefined
// arr
// (3) ['apple', 'mango', 'banana']0: "apple"1: "mango"2: "banana"length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// arr.typeof
// undefined
// typeof arr
// 'object'
// arr.push("litchi")
// 4
// arr
// (4) ['apple', 'mango', 'banana', 'litchi']
