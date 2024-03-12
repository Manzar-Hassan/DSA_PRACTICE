function isPalindrome(s) {

    if(!s.length) return true;

    let startPointer = 0;
    let endPointer = s.length - 1;

    while(startPointer < endPointer) {
        if(s[startPointer] === s[endPointer]) {
            startPointer++;
            endPointer--;

        } else {
            return false
        }
    }

    return false;
}

console.log(isPalindrome('kayak'))