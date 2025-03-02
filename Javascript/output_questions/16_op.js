console.log(5 < 8 > 2); 
//false
//Explanation:
// The < and > operators have left-to-right associativity,
// so the expression 5 < 8 > 2 is evaluated as (5 < 8) > 2. 
// The comparison 5 < 8 returns true,
// so the expression becomes true > 2.
// The boolean value true is coerced to 1 in a numeric context,
// so the expression becomes 1 > 2, which evaluates to false.


console.log(1 > 19 < 2);

//true
//Explanation:
// The < and > operators have left-to-right associativity,
// so the expression 1 > 19 < 2 is evaluated as (1 > 19) < 2.   
// The comparison 1 > 19 returns false,
// so the expression becomes false < 2.
// The boolean value false is coerced to 0 in a numeric context,
// so the expression becomes 0 < 2, which evaluates to true.