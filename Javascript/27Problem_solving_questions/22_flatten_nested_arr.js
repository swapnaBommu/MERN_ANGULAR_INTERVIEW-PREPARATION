function flattenArray(arr) {
    const nestedArr = [...arr];
    const result = [];
    while (nestedArr.length) {
        const next = nestedArr.pop();
        if (Array.isArray(next)) {
            nestedArr.push(...next);
        } else {
            result.push(next);
        }
    }
    return result.reverse();
    // Reverse the result to maintain original order
   }
   // Example usage:
   const nestedArray = [1, [2, [3, 4], [7,5]], 6];
   const flattenedArray = flattenArray(nestedArray);
   console.log(flattenedArray);