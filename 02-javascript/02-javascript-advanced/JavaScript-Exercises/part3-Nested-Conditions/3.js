const n1 = 15;
const n2 = 42;
const n3 = 8;

let max = n1; // מניחים כרגע שהראשון הוא הכי גדול (15)

if (n2 > max) {
    max = n2; // 42 גדול מ-15? כן! אז עכשיו max שווה 42
}

if (n3 > max) {
    max = n3; // 8 גדול מ-42? לא. אז מדלגים.
}

console.log("The largest number is: " + max); // מציג 42

