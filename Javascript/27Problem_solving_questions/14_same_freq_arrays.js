const sameFrequency = (arr1, arr2) =>{
    if(arr1.length !== arr2.length){
        return false;
    }
    let freqCount1 = {};
    let freqCount2 = {};
    
    for(let num of arr1){
        freqCount1[num] = (freqCount1[num] || 0) + 1;
    }

    for(let num of arr2){
        freqCount2[num] = (freqCount2[num] || 0) + 1;
    }

    for(let key in freqCount1){
        if(!(key * key) in freqCount2){
            return false;
        }
        if(freqCount1[key] !== freqCount2[key * key]){
            return false;
        }
    }
    return true;
}

let arr1 = [1,2,3,4]
let arr2 = [1,16,4,9];
let arr3 = [1,4,2,9];
console.log(sameFrequency(arr1,arr2));
console.log(sameFrequency(arr1,arr3));