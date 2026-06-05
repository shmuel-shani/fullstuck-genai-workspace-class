const x = 10;
const y = 5;

// בדיקה 1: האם הראשון מתחלק בשני?
if (x % y === 0) {
    console.log(x + " is divisible by " + y); // 10 מתחלק ב-5? כן!
} else {
    console.log(x + " is NOT divisible by " + y);
}

// בדיקה 2: האם השני מתחלק בראשון?
if (y % x === 0) {
    console.log(y + " is divisible by " + x);
} else {
    console.log(y + " is NOT divisible by " + x); // 5 לא מתחלק ב-10 בלי שארית!
}


