const x = "10";
console.log(x++);

//error
//Explanation:

//The increment operator (++) is used to increment the value of a variable by 1.    
//The value of x is "10". 
// The increment operator (++) is used with a string value. 
// So, it throws an error.
//The error is "Uncaught ReferenceError: Invalid left-hand side expression in postfix operation".
//The error occurs because the increment operator (++) cannot be used with a string value.