// 1. יצירת המטריצה ומילוי במספרים מ-1 עד 100
let matrix4 = [];
let counter = 1;

for (let i = 0; i < 10; i++) {
    let row = [];
    for (let j = 0; j < 10; j++) {
        row.push(counter);
        counter++;
    }
    matrix4.push(row);
}

// 2. הדפסת המטריצה המקורית
console.log("--- Matrix BEFORE ---");
console.table(matrix4); 


// 3. הקוד: איפוס תאים שמתחלקים ב-5 או ב-7
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        
        let currentCell = matrix4[i][j]; 
        
        // בודקים התחלקות ב-5 או 7
        if (currentCell % 5 === 0 || currentCell % 7 === 0) {
            matrix4[i][j] = 0; // דורסים ושמים אפס
        }
    }
}


// 4. הדפסת המטריצה לאחר הסינון
console.log("--- Matrix AFTER ---");
console.table(matrix4);

