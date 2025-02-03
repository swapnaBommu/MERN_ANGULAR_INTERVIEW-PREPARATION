// 1. Write a program to remove duplicates from an array ?
// Most Most Asked question)
let arr = [1,2,1,2,1,4,5,3,2,4,3,6];
let unique=[];
for(let i=0;i<arr.length;i++){ //O(n)
    if(unique.indexOf(arr[i]) == -1){ //in wrost case it will check for the value of arr[i] in O(n)
        unique.push(arr[i]);
    }
}
//so over all time complexity is O(n^2) and space complexity is O(n)
console.log(unique);

 /* to optimise the above solution we can use set() data type to remove duplicates 
 time complexity - O(n)
 space complexity - O(n)   
 Use the Set object to remove duplicates. This works
 because Sets only store unique values */
 function removeDuplicates(arr) {
    // return Array.from(new Set(arr));
    return[...new Set(arr)];
    
 }
 console.log(removeDuplicates(arr))