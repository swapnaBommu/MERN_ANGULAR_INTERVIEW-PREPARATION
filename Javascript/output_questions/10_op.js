const name = "name";
age = 20;
console.log(delete name);
console.log(delete age);

//false
//true
//Explanation: 
// The delete operator returns true if the property is successfully deleted, 
// otherwise it returns false.
//The delete operator cannot delete variables declared with var, let, or const.