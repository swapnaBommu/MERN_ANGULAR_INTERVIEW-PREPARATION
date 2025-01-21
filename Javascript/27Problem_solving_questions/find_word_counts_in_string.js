function countWords(str){
    /\s+/
    const wordArr = str.split(/\s+/);
    
    return wordArr.length;
}

const text = "Hello, this is a simple test!";
const wordCount = countWords(text);
console.log(wordCount);

function isPalindrome(str,start, end){
    while(start < end){
        if(str[start] === str[end]){
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
}
let s = "mad";
console.log(isPalindrome(s,0,s.length-1));