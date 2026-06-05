const matrix3 = [
  [1, 2, 3],   // שורה באינדקס 0. הסכום שלה הוא: 6
  [10, 5, 2],  // שורה באינדקס 1. הסכום שלה הוא: 17
  [4, 4, 4]    // שורה באינדקס 2. הסכום שלה הוא: 12
];

// נניח שיש לנו משתנה matrix3 עם נתונים...
let maxSum = -1;       // נשמור פה את הסכום הכי גבוה (מתחילים ממספר נמוך)
let bestRowIndex = 0;  // נשמור פה את מספר השורה המנצחת

for (let i = 0; i < matrix3.length; i++) {
    
    let currentRowSum = 0; // קופה לחישוב השורה הנוכחית
    
    for (let j = 0; j < matrix3[i].length; j++) {
        currentRowSum += matrix3[i][j]; // מחברים את התאים
    }
    
    // בודקים: האם השורה הנוכחית עקפה את האלוף?
    if (currentRowSum > maxSum) {
        maxSum = currentRowSum; // יש לנו אלוף חדש!
        bestRowIndex = i;       // נשמור את מספר השורה שלו
    }
}

console.log("The row with the highest sum is at index: " + bestRowIndex);

