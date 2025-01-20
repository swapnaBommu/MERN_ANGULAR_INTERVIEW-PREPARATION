// 1. Write a program to remove duplicates from an array ?
// Most Most Asked question)
let arr = [1,2,1,2,1,4,5,3,2,4,3,6];
let unique=[];
for(let i=0;i<arr.length;i++){
    if(unique.indexOf(arr[i]) == -1){
        unique.push(arr[i]);
    }
}
console.log(unique);

 /* Use the Set object to remove duplicates. This works
 because Sets only store unique values */
 function removeDuplicates(arr) {
    // return Array.from(new Set(arr));
    return[...new Set(arr)];
    
 }
 console.log(removeDuplicates(arr))