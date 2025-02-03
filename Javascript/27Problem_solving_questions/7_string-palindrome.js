let str = "madam"

function isPalindrome(str,start,end){
    while(start < end){
        if(str.charAt(start)===str.charAt(end)){
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
}
const palinCheck = isPalindrome(str,0,str.length-1);
console.log(palinCheck);

/*
Time complexity is O(n)
space complexity is O(1)
The above solution is the optimal solution using two pointer approach
if we want to use built in functions then use below
str.split('').reverse().join('') -- will create reversed arr which takes O(n) space
*/
