const diameter = 20; // קוטר הסיר
const depth = 15;    // עומק הסיר

// 1. מציאת הרדיוס (מחצית מהקוטר)
const radius = diameter / 2; // יהיה 10

// 2. חישוב שטח מעגל התחתית (פאי כפול רדיוס בריבוע)
// נשתמש ב- ** 2 כדי לעשות "בריבוע"
const circleArea = Math.PI * (radius ** 2);

// 3. חישוב הנפח (שטח התחתית כפול העומק)
const capacity = circleArea * depth;

console.log("The pot's capacity is: " + capacity);

