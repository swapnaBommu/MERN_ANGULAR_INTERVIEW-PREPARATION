const numbers =[1,2,3,4,5];
const [x, ...y] = numbers;
console.log(x);
console.log(y);
//1
// [2,3,4,5]
//Explanation:
//The array destructuring assignment syntax is used to unpack values from arrays,
//  or properties from objects, into distinct variables.