function findMax(arr){
    const uniqueArr = [...new Set(arr)];
    return Math.max(...uniqueArr);
}
let a = [1,2,2,7,4,8,3,1,57,3];

const maxElement = findMax(a);
console.log(maxElement);

//find max element in the arr
let arr = [1,2,12,3,6,9];
let max = 0;
for(let i=0;i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i];
    }
}
console.log(max)