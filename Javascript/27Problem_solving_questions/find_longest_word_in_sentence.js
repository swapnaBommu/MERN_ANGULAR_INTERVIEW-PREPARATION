const findLongestWord = (sentence) => {
    const words = sentence.split(" ");
    let longestWord = "";
    for(let word of words){
        if(longestWord.length < word.length){
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("find the longest word in the given sentence"))

/*
Time complexity is O(n)
space complexity is O(n) to store the words arr
If we want to reduce the space complexity we can simply iterate throught the arr
*/

function findLongestOptimal(sentence) {
    let longestWord = "";
    let currentWord = "";
    for (let char of sentence) {
        if(char === " "){
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }else{
            currentWord +=char;
        }
    }
     // Final check for the last word (if it's the longest)
     if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    return longestWord;
}

console.log(findLongestOptimal("this is optimal solution for the longest word find problem"))