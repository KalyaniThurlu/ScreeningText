const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const greet = (name = "Guest") => `Hello,${name}`;
console.log(greet());
console.log(greet("latha"));
const good = (name = "visit") => `hi${name}`;
console.log(good());
console.log(good("madhu"));

const person = {
  Name: "latha",
  Age: 23,
  Technology: "webdeveloper",
};
const { Name, Age, Technology } = person;
console.log(Name, Age, Technology);
console.log(person.Name);

const num1 = [1, 2, 3];
const num2 = [...num1, 4, 5];
console.log(num2);
const Exfun = (...numbers) => {
  numbers.reduce((acc, num) => {
    acc + num, 0;
  });
};
console.log(Exfun(1, 2, 3, 4, 5, 6));

const Exfun1 = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(Exfun1(1, 2, 3, 4, 5));

const fetchData = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data fetched!");
  else reject("Error fetching data.");
});

fetchData
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  print() {
    console.log(`my name is ${this.name}and i am a ${this.age} years of old`);
  }
}
const Result = new Person("Alice", 24);
Result.print();

const map = new Map();
map.set("name", "latha");
map.set("name2", "Geetha");
map.set("name3", "priya");
console.log(map.get("name"));
console.log(map.has("name2"));
console.log(map.delete("name3"));

const mySet = new Set();
mySet.add("num1", 1);
mySet.add("num2", 2);
mySet.add("num3", 3);
mySet.add("num4", 4);
mySet.add("num4", 5);

console.log(mySet);
console.log(mySet.has("num4"));
console.log(mySet.delete("num3"));
console.log(mySet);
console.log(mySet.size);

//===function==
function withParam(a, b) {
  return a + b;
}
const results = withParam(3, 3);
console.log(results);
function withOutParam() {
  return "wellcome to javascript";
}
console.log(withOutParam());
function withReturn() {
  return "hello";
}
console.log(withReturn());

function withOutReturn() {
  console.log("this javascript practice");
}
withOutReturn();
//==object===
const peoples = {
  name: "latha",
  sno: 23,
  salary: 20000,
};

// Destructure the object
const { name, sno, salary } = peoples;

// Log the values
console.log(name, sno, salary); // Output: latha 23 20000
const ArrayofObject = [
  { Name: "latha", Age: 23, Technology: "webdevelopment" },
  { Name: "priya", Age: 22, Technology: "java" },
  { Name: "mashu", Age: 23, Technology: "phython" },
];
console.log(ArrayofObject);
const names = ArrayofObject.map((items) => {
  return items.Technology;
});
console.log(names);
//==Arraymethods====

let fruits = ["Apple", "banana", "mango", "orange"];
const Exfruits = fruits.push("grapes");
console.log(fruits);
const exnum = [1, 2, 3, 4, 5];
let expop = exnum.pop();
console.log(exnum);

let vegitables = ["mirchi", "onion", "tamoto"];
const exshift = vegitables.shift("bringel");
console.log(vegitables);

let veg = ["mirchi", "onion"];
const answer = veg.unshift("ladifinger");
console.log(veg);
let books = ["english", "telugu", "english"];
let books1 = books.concat("acconuts");
console.log(books1);
let Exjoin = ["padhma", "priya", "madhu", "geetha"];
const exjoin = Exjoin.join(")");
console.log(exjoin);
const exslice = "this is javascript class";
const Exslice = exslice.slice(9, 18);
console.log(Exslice);

const emp = [
  { name: "latha", age: 22, Technology: "java" },
  { name: "sudha", age: 25, Technology: "php" },
  { name: "madhu", age: 26, Technology: "oracle" },
];
const rst = emp.map((i) => {
  return i.name;
});
console.log(rst);
const Exfilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const exfilter = Exfilter.filter((e) => {
  return e % 2 === 0;
});
console.log(exfilter);

const exsort = [9, 1, 6, 3, 0, 4, -1, 20, 12, 22];
const Exsort = exsort.sort((a, b) => a - b);
console.log(Exsort);

const exreducer = [1, 2, 3, 4];
const Exreducer = exreducer.reduce((a, b) => a + b, 0);
console.log(Exreducer);
//==String Methods===
let str = "hello";
console.log(str.toUpperCase());

let str1 = "WELLCOME";
console.log(str1.toLocaleLowerCase());
let str2 = "javascript ";
console.log(str2.indexOf("s"));
let exlastindex = "wellcome";
console.log(exlastindex.lastIndexOf("c"));
let exfind = [1, 2, 3, 4, 5];
let Exfind = exfind.includes(5);
console.log(Exfind);
let exreplace = "hello kalyani";
console.log(exreplace.replace("kalyani", "latha"));
let exreverse = "kalyani";
console.log(exreverse.split("").reverse().join(""));
let extrim = "   hello  ";
console.log(extrim.trim());
let exchart = "wellcome";

console.log(exchart.charAt("4"));
//====For loop===

let exnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenum = [];
for (let i = 0; i < exnumbers.length; i++) {
  if (exnumbers[i] % 2 == 0) {
    evenum.push(exnumbers[i]);
  }
}
console.log(evenum);

let exnumbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddnum = [];
for (let i = 0; i < exnumbers1.length; i++) {
  if (exnumbers1[i] % 2 !== 0) {
    oddnum.push(exnumbers1[i]);
  }
}
console.log(oddnum);
let Exminum = [20, 30, 40, 7, 5, 50, 10];
let minnum = Exminum[0];
for (let i = 0; i < Exminum.length; i++) {
  if (Exminum[i] < minnum) {
    minnum = Exminum[i];
  }
}
console.log(minnum);

let Exmaxnum = [10, 20, 30, 80, 40, 60];
let maxnum = Exmaxnum[0];
for (let i = 0; i < Exmaxnum.length; i++) {
  if (Exmaxnum[i] > maxnum) {
    maxnum = Exmaxnum[i];
  }
}
console.log(maxnum);
let pasitivenum = [0, 1, -2, 3, -4, 5, 6];
let pasitive = [];
for (let i = 0; i < pasitivenum.length; i++) {
  if (pasitivenum[i] > 0) {
    pasitive.push(pasitivenum[i]);
  }
}
console.log(pasitive);
let negtivenum = [0, -1, 2, -3, 4, -5, 6];

let negtive = [];
for (let i = 0; i < negtivenum.length; i++) {
  if (negtivenum[i] < 0) {
    negtive.push(negtivenum[i]);
  }
}
console.log(negtive);

function conditionalStatements(a, b, c) {
  if (a > b) {
    console.log("10 is greterthan than 20");
  } else if (b === c) {
    console.log("20 is equal to 30");
  } else if (c < b) {
    console.log("30 is greater than 20");
  } else if (b <= a) {
    console.log("20 is greater than or equal to 10");
  } else {
    console.log("All conditions are wrong");
  }
}

conditionalStatements(10, 20, 30);
