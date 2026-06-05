const num = 45;

// שליפת האחדות (הספרה הימנית)
const rightDigit = num % 10; // ייתן 5

// שליפת העשרות (הספרה השמאלית - מחיקת הימנית)
const leftDigit = Math.floor(num / 10); // ייתן 4

// חיבור מתמטי שלהן
const sumOfDigits = leftDigit + rightDigit;

console.log("Sum of digits: " + sumOfDigits); // מדפיס 9

