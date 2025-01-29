//1
const a = 1<2<3;
const b = 1>2>3;
// console.log(a,b);
/* output: true false*/
//2.
const p = { k: 1, l: 2 };
const q = { k: 1, l: 2 };
let isEqual = p==q;
let isStartEqual = p=== q;
// console.log(isEqual, isStartEqual); //false false
/* output: false false
Explanation: In JavaScript, when you compare objects using == or === , you're
comparing their references in memory, not their actual contents. Even if
two objects have the same properties and values, they are considered
unequal unless they reference the exact same object in memory.
3)
a) 2+2 = ?
b) "2"+"2" = ?
c) 2+2-2 = ?
d) "2"+"2"-"2" = ? (tricky remember this)
e) 4+"2"+2+4+"25"+2+2 ?
output:
a) 4
b)"22" (string concatenation)
c)2
d) 20 (string "22" is converted to a number, then subtracted by the number 2)
e)4+"2"+2+4+"25"+2+2=>
4 +"2" = "42" + 2 = "422" + 4 = "4224" + "25" = "422425" + 2 = "4224252" + 2 = "42242522")
4)
let a = 'jscafe'
a[0] = 'c'
console.log(a)
Output:
Strings are immutable in javascript so we cannot change individual characters by index.
5)
var x=10;
function foo(){
var x = 5;
console.log(x)
}
foo();
console.log(x)
output:
5
10
*/
var v;
console.log(v);

let n = null;
console.log(typeof n);

console.log([]==![]);
console.log(+'Infinity' - '5')
console.log(3 * 'foo');
console.log(typeof typeof 1);
console.log([] + {});
console.log('foo' instanceof String);
console.log(Math.max());
console.log(NaN === NaN);
console.log(typeof NaN);
console.log([] + []);
console.log(0.1 + 0.2 === 0.3);
console.log('10' - - '5')
console.log(null + null);
console.log([] == '')