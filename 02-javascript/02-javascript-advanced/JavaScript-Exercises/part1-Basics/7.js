const num = 6235;

// נחלק ב-100 כדי למחוק 2 ספרות ימניות
// 6235 / 100 = 62.35 -> Math.floor יעגל ל- 62
const tempNum = Math.floor(num / 100);

// עכשיו המספר הוא 62. נשלוף את הימנית שלו
const hundredsDigit = tempNum % 10;

console.log("The hundreds digit is: " + hundredsDigit); // מדפיס 2

