let arr = [1,2,3,4,5,6,7,8,9];

function findEvenNumbers(arr){
    let newArr = arr.filter((num)=> {
        if(num % 2===0){
            return num;
        }
    })
    return newArr;
}

evenNums = findEvenNumbers(arr);
console.log(evenNums);

//time complexity is O(n) --to check each element of the arr
//space complexity is O(n) ---to store the even numbers in wrost case
//all the elements in arr is even