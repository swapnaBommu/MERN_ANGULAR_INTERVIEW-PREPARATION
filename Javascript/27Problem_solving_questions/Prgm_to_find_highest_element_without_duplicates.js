function findMax(arr){
    const uniqueArr = [...new Set(arr)];
    return Math.max(...uniqueArr);
}
let a = [1,2,2,7,4,8,3,1,57,3];

const maxElement = findMax(a);
console.log(maxElement);
