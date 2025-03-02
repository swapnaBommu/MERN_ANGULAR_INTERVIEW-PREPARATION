let a = true;
let b = true;
let c = false;
console.log(a && b || c);

//true
//Explanation: The logical AND operator (&&) has higher precedence than the logical OR operator (||).
// So, the expression a && b is evaluated first.