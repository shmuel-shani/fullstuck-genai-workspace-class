const num = 4.1;

// 1. מעגלים למטה כדי לקבל מספר שלם נקי (x)
const x = Math.floor(num); 

// 2. מפעילים את הנוסחה
const nextEven = x + 2 - (x % 2);

console.log("Next even number is: " + nextEven); // מדפיס 6

