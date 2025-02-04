function findSecondLargest(arr) {
    if (arr.length < 2) {
        throw new Error(`Array must contain at least two elements.`);
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest){
            secondLargest = arr[i];
        }
    }
    if (secondLargest === -Infinity) {
        throw new Error(`There is no second largest element in the array.`);
    }
    return secondLargest;
}

const array = [10, 5, 20, 8, 12];
console.log(findSecondLargest(array));       