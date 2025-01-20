1.
const a = 1<2<3;
const b = 1>2>3;
console.log(a,b);
Output:
true, false
In JavaScript, the comparison operators < and > have left-to-right
associativity. So, 1 < 2 < 3 is evaluated as (1 < 2) < 3 , which becomes
true < 3 . When comparing a boolean value ( true ) with a number ( 3 ),
JavaScript coerces the boolean to a number, which is 1 . So, true < 3
evaluates to 1 < 3 , which is true .
Similarly, 1 > 2 > 3 is evaluated as (1 > 2) > 3 , which becomes false >
3 . When comparing a boolean value ( false ) with a number ( 3 ),
JavaScript coerces the boolean to a number, which is 0 . So, false > 3
evaluates to 0 > 3 , which is false .
That's why console.log(a, b) prints true false .
