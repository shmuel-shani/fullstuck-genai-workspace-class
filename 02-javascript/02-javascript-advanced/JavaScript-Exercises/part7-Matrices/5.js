const matrix5 = [];
const size = 10;

for (let i = 0; i < size; i++) {
    const row = [];
    
    for (let j = 0; j < size; j++) {
        // בודקים מה המרחק של התא שלנו מ-4 הקירות:
        const distanceToTop = i;
        const distanceToBottom = size - 1 - i;
        const distanceToLeft = j;
        const distanceToRight = size - 1 - j;
        
        // מוצאים מי מהקירות הכי קרוב אלינו
        const minDistance = Math.min(distanceToTop, distanceToBottom, distanceToLeft, distanceToRight);
        
        // הערך של התא הוא המרחק המינימלי + 1
        row.push(minDistance + 1);
    }
    
    matrix5.push(row);
}

console.log(matrix5); 
/* התוצאה תיראה ככה במרכז למשל:
1 1 1 1 1
1 2 2 2 1
1 2 3 2 1
... וכך הלאה עד המרכז
*/

