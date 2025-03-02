let nums = [1,2,3,4];
delete nums[2];
console.log(nums);


//[1,2,,4]
//Explanation: 
// The delete operator is used to delete the property of an object. 
// Here, nums is an array and the elements are stored as properties of the array object. 
// When you delete an element from an array, the element is removed but the length of the array remains the same. 
// The deleted element is replaced with undefined. 
// In this case, the element at index 2 (value 3) is deleted, 
// so the array becomes [1,2,empty,4]. The element at index 2 is replaced with undefined.