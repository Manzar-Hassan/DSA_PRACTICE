function reverseWords(str) {
    str = str.split('').reverse().join('');
    
    let start = 0;
    let end = 0;
    let result = '';

    while (end < str.length) {
        while (end < str.length && str[end] !== ' ') {
            end++;
        }

        let word = str.substring(start, end);
        result += word.split('').reverse().join('') + ' ';

        while (end < str.length && str[end] === ' ') {
            end++;
        }
        start = end;
    }

    return result.trim();
}

console.log(reverseWords("Hello   world"));
console.log(reverseWords("cat fish"));
