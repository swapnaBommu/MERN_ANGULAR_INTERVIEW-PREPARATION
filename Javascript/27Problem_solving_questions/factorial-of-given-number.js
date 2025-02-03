const findFactorial = (num) => {
    if (num == 0 || num == 1) {
    return 1;
    } else {
    return num * findFactorial(num - 1);
    }
}

console.log(findFactorial(4));
/*
Time complexity - O(n)
space complexity - O(n) ==due to call stack
 */

const factorialMemo = (n) =>{
    let cache = {};
    function findFactorial(num){
        if(num == 0 || num == 1){
            return 1;
        }
        if (num in cache) return cache[num];

        return (cache[num] = num * findFactorial(num - 1));
    }
    return findFactorial(n);
}

console.log(factorialMemo(4));  // Output: 24
console.log(factorialMemo(5));  // Output: 120 (Uses cached values)
