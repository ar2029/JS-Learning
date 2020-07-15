// Question 2:
// Explain with examples the remaining methods of String and Array

let str = `<h2>BackTicks</h2>
<p>Preview</p>
`;
console.log(str);

let name = "Jion";
let type = "Operator";
let founder = "Ramesh";

console.log("The name is " + name + ". It's type is " + type + " and it's founder is " + founder + ".");
console.log(`The name is ${name}. It's type is ${type} and it's founder is ${founder}.`);

console.log("Answer 2");

// string methods
let text = "The quick brown fox jumps over the wall.";

console.log(text);

console.log("%cTo check the length", 'color: magenta');
console.log(text.length)

console.log("%cTo change the case", 'color: magenta');
console.log(text.toLowerCase());
console.log(text.toUpperCase());

console.log("%cAccessing the index number by character", 'color: magenta');
console.log(text[5]);
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'))

console.log("%cAccessing the character by index number", 'color: magenta');
console.log(text.charAt('12'));

console.log("%cChecking whether ends with the given string returns true or false", 'color: magenta');
console.log(text.endsWith("ll."));

console.log("%c Splitting the text by the given argument and then appending in array", 'color: magenta');
console.log(text.split('e'));

// splice
console.log(text);
// replaceAll
console.log("%c Replacing the specified substring to second argument's substring", 'color: magenta');
console.log(text.replace('e|s','ee'));
// replace
// substring
console.log("%c Selecting the substring from given string by specifying the first and last index", 'color: magenta');
console.log(text.substring(2,16));


// Array methods
let arr = ['one', true, 32, ['1','2']];
let arr2 = ['rio', 'berlin','alicia'];
console.log(arr);

console.log("%cChecking whether isArray returns true or false", 'color: magenta');
console.log(Array.isArray(arr));

console.log("%cAccessing the index number by an item in array", 'color: magenta');
console.log(arr.indexOf(32));

console.log("%c Reversing the array", 'color: magenta');
console.log(arr.reverse())

console.log("%cAccessing the item of an array by index number", 'color: magenta');
console.log(arr[0]);

console.log("%cConcating the arr2 in arr", 'color: magenta');
console.log(arr.concat(arr2));


console.log("%cAppending an element", 'color: magenta');

console.log("%c    At the start", 'color: magenta');
arr2.unshift('tokyo');
console.log(arr2);

console.log("%c    At the end", 'color: magenta');
arr2.push('helsinki');
console.log(arr2);


console.log("%cRemoving an element", 'color: magenta');

console.log("%c    From the start", 'color: magenta');
// console.log(arr2.shift('tokyo'));
console.log(arr2.shift());
console.log(arr2);

console.log("%c    From the end", 'color: magenta');
console.log(arr2.pop());
console.log(arr2)