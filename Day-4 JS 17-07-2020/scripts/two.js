// Question 2:
// Destructure the following object:
// const student = {
//   name: " Helsinki",
//   age: 24,
//   projects: {
//     diceGame: "Two player dice game using JavaScript",
//   },
// };

console.log("Answer 2");

// splitting the input by space

const student = {
  name: "Helsinki",
  age: 24,
  projects: {
    diceGame: "Two player dice game using JavaScript",
  },
};

let {
  name,
  age,
  projects: { diceGame },
} = student;

// showing the object(key:value)
console.log({ name, age });
// showing the values
console.log(name, age, diceGame);
