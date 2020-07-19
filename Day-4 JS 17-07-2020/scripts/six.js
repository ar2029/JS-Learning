// Question 6:
// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.
// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
// Here we can assume that the visitor only inputs numbers. There’s no need to implement a specialhandling for a non-numeric input in this task.

// while (true) {
//   let num = prompt(`Enter the number`);
//   if (num > 100) {
//     console.log("Number: " + num);
//     continue;
//   } else {
//     console.log("Number: " + num);
//     break;
//   }
// }

while (!false) {
  let num = prompt(`Enter the number`);
  if (num < 101) {
    console.log("Number: " + num);
    break;
  } else {
    console.log("Number: " + num);
    continue;
  }
}
