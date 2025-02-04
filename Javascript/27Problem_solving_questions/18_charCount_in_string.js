function countCharacters(str) {
    // Object to store character counts
     const charCount = {};
     const len = str.length;
    // Loop through string & count occurrences of each character
    for (let i = 0; i < len; i++) {
        const char = str[i];
        // Increment count for each character
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}

const result = countCharacters("helaalo");
console.log(result);
