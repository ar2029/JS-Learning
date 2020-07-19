// Question 1 :
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.


console.log('Answer 1');


// Prompt

for (let i = 0; i<101 ; i++){
    if (i%3==0){
        console.log(`Here multiple is ${i}. Printing 'fizz' on multiple of 3.`);
    }
    if (i%5==0) {
        console.log(`Here multiple is ${i}. Printing 'buzz' on multiple of 5.`);

    }
    if (i%5==0 && i%3==0) {
        console.log(`Here multiple is ${i}. Printing 'fizzbuzz' on multiple of 3 and 5.`);
    }
}
