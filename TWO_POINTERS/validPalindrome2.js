function checkPalindrome(str) {
    let startPointer = 0;
    let endPointer = str.length - 1;

    while (startPointer < endPointer) {
        if (str[startPointer] === str[endPointer]) {
            startPointer++;
            endPointer--;

        } else {
            return false
        }
    }

    return true
}

function isPalindrome(s) {
    let startPointer = 0;
    let endPointer = s.length - 1;

    while (startPointer < endPointer) {
        if (s[startPointer] === s[endPointer]) {
            startPointer++;
            endPointer--;

        } else {
            if (checkPalindrome(s.substr(startPointer, endPointer - startPointer))) {
                return true

            } else if (checkPalindrome(s.substr(startPointer + 1, endPointer - startPointer))) {
                return true

            } else {
                return false
            }
        }
    }

    return true;
}

console.log(isPalindrome('madame'))
