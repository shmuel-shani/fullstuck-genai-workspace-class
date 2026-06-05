const num = 61;

const rightDigit = num % 10; // 1
const leftDigit = Math.floor(num / 10); // 6

// מרכיבים את המספר ההפוך
const reversedNum = (rightDigit * 10) + leftDigit;

console.log("Reversed number: " + reversedNum); // מדפיס 16


