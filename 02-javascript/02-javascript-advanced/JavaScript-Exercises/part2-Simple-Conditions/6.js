const programmerName = "Danny";
const currentSalary = 5800; // השכר לפני ההעלאה

// 1. מחשבים כמה זה תוספת של 10%
let newSalary = currentSalary * 1.10; // יוצא 6380 ש"ח

// 2. בודקים אם חרגנו מהתקציב של הבוס
if (newSalary > 6000) {
    // 3. הבוס מתערב: "יקר מדי! תנו לו רק 5%"
    newSalary = currentSalary * 1.05; // מתקן את השכר ל- 6090 ש"ח
}

// 4. מדפיסים את התוצאה הסופית
console.log(programmerName + "'s new salary is: " + newSalary);

