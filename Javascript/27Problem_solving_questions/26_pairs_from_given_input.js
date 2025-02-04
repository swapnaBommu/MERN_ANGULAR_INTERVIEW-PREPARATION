function findPairs(input1, input2) {
    const pairs = [];
    const seen = new Set();
    for (const num of input1) {
    const complement = input2 - num;
    if (seen.has(complement)) {
    pairs.push([complement, num]);
    }
    seen.add(num);
    }
    return pairs;
}
const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const input2 = 10;
const output = findPairs(input1, input2);
console.log(output);