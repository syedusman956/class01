//equality and inequality with strings
console.log("equality and inequality with strings")
let letters: string = "Usman Ghani";
console.log(letters.includes("Gha"));
console.log(letters.includes("Cha"));

// Tests using the lower case function

console.log("the lower case function")
let letter: string = "Captain Skanda";
console.log(letter.toLowerCase().includes("cap"));
console.log(letter.toLowerCase().includes("CAP"));

/*
 Numerical tests involving equality and inequality, greater than and less than,
  greater than or equal to, and less than or equal to
*/
console.log("equality operator");
let b: number = 4;
let d: number = 2;
console.log("b == d = " + (b == d));
console.log("b != d = " + (b != d));

console.log("equality operator");
let m: number = 4;
let n: number = 2;
console.log("m === n = " + (m === n));
console.log("m !== n = " + (m !== n));

console.log("relational operators <, >");
let i: number = 4;
let j: number = 2;
console.log("i < j = " + (i < j));
console.log("i > j = " + (i > j));

console.log("relational operators <=, >=:");
let a: number = 3;
let c: number = 3;
console.log("a >= c = " + (a >= c));
console.log("a <= c = " + (a <= c));

//Tests using "and" and "or" operators
console.log("using and and or operators")
let o: number = 4;
let p: number = 2;
console.log("o & p = " + (o & p));
console.log("o | p = " + (o | p));



