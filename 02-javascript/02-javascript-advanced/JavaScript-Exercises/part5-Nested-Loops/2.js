// נדמה שהמשתמש הקליד את המספרים האלה
const inputs = [9, 12, 8, 8, 5, 9]; 

// שלב א': ניקח את המספר הראשון לפני תחילת הלולאה, ונדפיס אותו
let prevNumber = inputs[0]; 
console.log(prevNumber); // מדפיס 9

// שלב ב': נרוץ על שאר המספרים שנקלטו
for (let i = 1; i < inputs.length; i++) {
    
    let currentNumber = inputs[i]; // המספר הנוכחי שנקלט
    
    // בודקים אם צריך לעלות, לרדת, או להישאר במקום
    if (currentNumber > prevNumber) {
        // לולאה שעולה מהמספר הקודם+1 ועד למספר הנוכחי
        for (let j = prevNumber + 1; j <= currentNumber; j++) {
            console.log(j);
        }
    } 
    else if (currentNumber < prevNumber) {
        // לולאה שיורדת (j--) מהמספר הקודם-1 ועד למספר הנוכחי
        for (let j = prevNumber - 1; j >= currentNumber; j--) {
            console.log(j);
        }
    } 
    else {
        // אם הם שווים, פשוט מדפיסים שוב את המספר
        console.log(currentNumber);
    }
    
    // בסוף הסיבוב, המספר הנוכחי הופך להיות "המספר הקודם" לסיבוב הבא!
    prevNumber = currentNumber;
}

