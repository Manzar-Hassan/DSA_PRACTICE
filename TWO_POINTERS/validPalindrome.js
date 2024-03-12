function isPalindrome(s) {

    if(!s.length) return true;

    let startPointer = 0;
    let endPointer = s.length - 1;

    while(startPointer < endPointer) {
        if(s[startPointer] !== s[endPointer]) {
           return false
        }

        startPointer++;
        endPointer--;
    }

    return true;
}

console.log(isPalindrome('kayak'))