// 1. Compare two numbers
function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

// 2. Factorial
function factorial(n) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

// 3. Combine three digits into a number
function combineDigits(a, b, c) {
    return a * 100 + b * 10 + c;
}

// 4. Rectangle or square area
function area(length, width = length) {
    return length * width;
}

// 5. Check if a number is perfect
function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n && n !== 0;
}

// 6. Perfect numbers in range
function perfectNumbersInRange(min, max) {
    let result = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) result.push(i);
    }
    return result;
}

// 7. Print time as "hh:mm:ss"
function formatTime(hours, minutes = 0, seconds = 0) {
    const pad = n => n.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 8. Convert time to seconds
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

// 9. Convert seconds to "hh:mm:ss"
function secondsToTime(sec) {
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = sec % 60;
    return formatTime(hours, minutes, seconds);
}

// 10. Difference between two dates as "hh:mm:ss"
function dateDifference(h1, m1, s1, h2, m2, s2) {
    let sec1 = timeToSeconds(h1, m1, s1);
    let sec2 = timeToSeconds(h2, m2, s2);
    let diff = Math.abs(sec1 - sec2);
    return secondsToTime(diff);
}

console.log(compareNumbers(3, 7));
console.log(factorial(5));
console.log(combineDigits(1, 4, 9));
console.log(area(5));
console.log(area(5, 3));
console.log(isPerfectNumber(28));
console.log(perfectNumbersInRange(1, 1000));
console.log(formatTime(9, 5));
console.log(timeToSeconds(1, 1, 1));
console.log(secondsToTime(3661));
console.log(dateDifference(12, 0, 0, 14, 30, 0));
