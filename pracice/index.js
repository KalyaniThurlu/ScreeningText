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
