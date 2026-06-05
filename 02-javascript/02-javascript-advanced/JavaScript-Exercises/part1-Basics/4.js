const totalMinutes = 88;

// 1. מציאת שעות שלמות (חלוקה ב-60 ועיגול למטה)
const hours = Math.floor(totalMinutes / 60); // 88 / 60 = 1.46... -> מעוגל ל-1

// 2. מציאת שארית הדקות (בעזרת מודולו %)
const leftoverMinutes = totalMinutes % 60; // כמה נשאר מ-88 אחרי שהוצאנו כפולות של 60? נשאר 28.

console.log(hours + " hour(s) and " + leftoverMinutes + " minute(s)");

