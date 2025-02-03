const maxCountOfConsecutiveOnes = (arr) =>{
    let maxCount = 0;
    let currCount = 0;
    for(let num of arr){
        if(num === 1){
            currCount++;
            maxCount = Math.max(currCount, maxCount);
        }else{
            currCount = 0;
        }
    }
    return maxCount;
}

let arr = [1,1,2,4,3,1,1,1,1,5];
console.log(maxCountOfConsecutiveOnes(arr));