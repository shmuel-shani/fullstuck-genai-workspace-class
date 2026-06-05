const number = 345;

if (number < 10) {
    console.log("1 digit");
} else if (number < 100) {
    console.log("2 digits");
} else if (number < 1000) {
    console.log("3 digits"); // 345 קטן מ-1000, אז זה מה שיודפס!
} else {
    console.log("4 digits"); // אם הוא לא קטן מ-1000 (עד 9999), יש לו 4 ספרות
}

