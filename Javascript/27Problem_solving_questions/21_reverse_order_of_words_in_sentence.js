const reverseWords = (sentence) => {
    let reversedSentence = "";
    let word = "";
    // Iterate over each character in the sampleString
    for (let i = 0; i < sentence.length; i++) {
    /* If the character is not a space, append it to the current word */
        if (sentence[i] !== ' ') {
            word += sentence[i];
        } else {
            /* If it's a space, prepend the current word to the reversed sentence and
            reset the word */
   
            reversedSentence = word + ' ' + reversedSentence;
            word = "";
        }
    }
    // Append the last word to the reversed sentence
    reversedSentence = word + ' ' + reversedSentence;
    // Trim any leading or trailing spaces and log the result
    console.log(reversedSentence.trim());
};

// Example usage
reverseWords("ChatGPT is awesome");
