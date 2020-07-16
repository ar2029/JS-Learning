// Question 1 :
// Take a number from a user and write a function which checks whether the number is even or
// odd. Assign the result to a variable and log that variable in the console.
// Example Input: 23
// Output: The number entered is 23 and Number is odd.

console.log('Answer 1');


// Prompt

let num = +prompt('Enter the number to check odd or even');
let ans = num%2 === 0 ? 'Even' : 'Odd';
console.log(`The number enetered is ${num} and Number is ${ans}` );
