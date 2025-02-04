const isAnagrams = (s, t)=>{
    if(s.length !==    t.length)return false;
    let freq = {};

    for(let char of s){
        freq[char] = (freq[char] || 0) + 1; 
    }

    for(let char of t){
        if(freq[char]){
            freq[char] -= 1;
        }else{
            return false;
        }
    }
    return true;
}

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0); // Array for 26 lowercase letters

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++; // Increment for s
        freq[t.charCodeAt(i) - 97]--; // Decrement for t
    }

    return freq.every(count => count === 0); // Check if all are zero
};
//✅ Time Complexity: O(n)
//✅ Space Complexity: O(1) (since array size is fixed at 26)

console.log(isAnagram("car","rac"));
console.log(isAnagram("qwerty","ytreqw"));