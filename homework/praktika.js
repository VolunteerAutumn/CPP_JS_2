alert("I am testing my tasks.");
// Initializig functions

function FindSmaller(a, b) {
    return (a < b) ? a : b;
}

function RaiseToPower(base, exponent) {
    return Math.pow(base, exponent);
}

function Calculator(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        default:
            return "Invalid operation";
    }
}

function IsPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function PrintMultTable(n) {
    if (n < 2 || n > 9) {
        console.log("Input must be between 2 and 9");
        return;
    }
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

function FindRemainder(a, b) { // not using %
    return a - Math.floor(a / b) * b;
}

function ReturnSum15(num1, num2 = 0, num3 = 0, num4 = 0, num5 = 0) {
    return num1 + num2 + num3 + num4 + num5;
}

function ReturnBiggest(num1, num2=0, num3=0, num4=0, num5=0) {
    return Math.max(num1, num2, num3, num4, num5);
}

function EvensOddsInRange(start, end, even) {
    for (let i = start; i <= end; i++) {
        if (even && i % 2 === 0) {
            console.log(i);
        } else if (!even && i % 2 !== 0) {
            console.log(i);
        }
    }
}

function NextDate(day, month, year) { // output: "DD.MM.YYYY", include leap years
    const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    };

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    day++;

    if (day > daysInMonth[month - 1]) {
        day = 1;
        month++;
        if (month > 12) {
            month = 1;
            year++;
        }
    }
    return `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${year}`;
}

// Testing.
a = prompt("Enter first number:");
b = prompt("Enter second number:");

console.log(`Smaller of ${a} and ${b} is: ${FindSmaller(a, b)}`);
console.log(` ${a} raised to the power of ${b} is: ${RaiseToPower(a, b)}`);

operation = prompt("Enter operation (+, -, *, /):");
console.log(`Result of ${a} ${operation} ${b} is: ${Calculator(Number(a), Number(b), operation)}`);

num = prompt("Enter a number to check if it's prime:");
console.log(`${num} is prime: ${IsPrime(Number(num))}`);

n = prompt("Enter a number (2-9) for multiplication table:");
console.log(`Multiplication table for ${n}:`);
PrintMultTable(Number(n));

console.log(`Remainder of ${a} divided by ${b} is: ${FindRemainder(Number(a), Number(b))}`);

console.log(`Sum of 5, 10, 15 is: ${ReturnSum15(5, 10, 15)}`);
console.log(`Biggest among 5, 10, 15, 20, 25 is: ${ReturnBiggest(5, 10, 15, 20, 25)}`);

start = prompt("Enter start of range:");
end = prompt("Enter end of range:");
even = confirm("Do you want to print even numbers? (Cancel for odd numbers)");
console.log(`Numbers in range ${start} to ${end}:`);
EvensOddsInRange(Number(start), Number(end), even);

day = prompt("Enter day:");
month = prompt("Enter month:");
year = prompt("Enter year:");
console.log(`Next date is: ${NextDate(Number(day), Number(month), Number(year))}`);

alert("Check the console for results of the tests.");
