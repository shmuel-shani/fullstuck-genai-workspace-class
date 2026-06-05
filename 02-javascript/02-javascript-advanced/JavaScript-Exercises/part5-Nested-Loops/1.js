let totalSchoolSum = 0; // הקופה הענקית של כל בית הספר

// לולאה חיצונית: רצה על 100 תלמידים
for (let student = 1; student <= 100; student++) {
    
    let studentSum = 0; // קופה קטנה שמתאפסת מחדש עבור כל תלמיד
    
    // לולאה פנימית: קולטת 10 ציונים לתלמיד הנוכחי
    for (let grade = 1; grade <= 10; grade++) {
        // נדמה קליטת ציון (מספר אקראי מ-0 עד 100)
        let currentGrade = Math.floor(Math.random() * 101); 
        
        studentSum = studentSum + currentGrade; // זורקים לקופה של התלמיד
    }
    
    // סיימנו עם התלמיד! נחשב ונדפיס את הממוצע שלו (חלקי 10)
    let studentAvg = studentSum / 10;
    console.log("Average for student " + student + " is: " + studentAvg);
    
    // לפני שעוברים לתלמיד הבא, נשפוך את הקופה שלו לתוך הקופה של בית הספר
    totalSchoolSum = totalSchoolSum + studentSum;
}

// הלולאה החיצונית סיימה לעבור על כל ה-100 תלמידים!
// נחשב את ממוצע בית הספר (סך כל הציונים חלקי 1000 ציונים סך הכל)
let schoolAvg = totalSchoolSum / 1000;
console.log("Overall school average: " + schoolAvg);

