console.log(data);
var data = function(){
    return "1";
}

//undefined
//Explanation:
// The variable data is declared using the var keyword,
// so it is hoisted to the top of the scope.
// However, the assignment of the function expression to data is not hoisted,
// so data is initially undefined.
// When the console.log statement is executed, data is undefined.  
// The function expression is assigned to data after the console.log statement,
// so it is not called or executed in this code snippet.
// Therefore, the output is undefined.
// Note: If the function expression were called or executed after it is assigned to data,
// the output would be "1" (the return value of the function).