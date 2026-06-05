const matrix2 = [];
const size = 10;

for (let i = 0; i < size; i++) {
    const row = [];
    
    for (let j = 0; j < size; j++) {
        // בודקים: האם אנחנו על אחד האלכסונים?
        if (i === j || i + j === size - 1) {
            row.push(1); // אם כן, שמים 1
        } else {
            row.push(0); // אם לא, שמים 0
        }
    }
    matrix2.push(row);
}

console.log(matrix2)

