//Program to find Reverse of a string without using built-in method ?

function reverseStr(str){
    let reversedStr = "";
    for(let i = 0; i< str.length;i++){
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

console.log(reverseStr("Hello Iam Saikrishna Ui Developer"));

//Time complexity is O(n) == iterate and concat the each char in given str
//space complexity is O(n) -- to store reversed string