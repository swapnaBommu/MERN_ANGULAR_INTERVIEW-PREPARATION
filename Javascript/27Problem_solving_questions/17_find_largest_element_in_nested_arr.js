function findLargestElement(arr) {
    let max = Number.NEGATIVE_INFINITY;
    // Initialize max to smallest possible number
    // Helper function to traverse nested arrays
    function traverse(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                // If element is array,recursively call traverse function
                traverse(arr[i]);
            } else {
                // If element is not an array, update max if needed
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
        }
    }
    traverse(arr);
    return max;
}

const array = [
    [3, 4, 58],
    [709, 8, 9, [10, 11]], [111, 2]
    ];
console.log("Largest element:", findLargestElement(array));

//time complexity - O(n);