const sumOfThirds = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 3) {
    sum += arr[i];
    }
    return sum;
}; 

let arr = [1,2,3,4,5,6,7,8,9];
console.log(sumOfThirds(arr));