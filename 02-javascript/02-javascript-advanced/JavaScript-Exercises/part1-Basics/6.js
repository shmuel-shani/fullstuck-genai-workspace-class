const num = 6235;

// 1. נעיף את הספרה הימנית על ידי חילוק ב-10 ועיגול למטה
// 6235 / 10 = 623.5 -> Math.floor יעגל ל- 623
const tempNum = Math.floor(num / 10); 

// 2. עכשיו המספר הוא 623. נשלוף את הספרה הימנית שלו!
const secondDigit = tempNum % 10; 

console.log("The second digit from right is: " + secondDigit); // מדפיס 3

