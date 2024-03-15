function sumOfSquare(num) {

    let sum = 0;

    while (num > 0) {
        const lastDigit = num % 10
        sum += lastDigit * lastDigit
        num = parseInt(num / 10)
    }

    return sum;
}

function isHappyNumber(n) {
    let slow = n;
    let fast = sumOfSquare(n)

    while (fast !== 1 && fast !== slow) {
        slow = sumOfSquare(slow);
        fast = sumOfSquare(sumOfSquare(fast))
    }

    return fast === 1;
}

console.log(isHappyNumber())
