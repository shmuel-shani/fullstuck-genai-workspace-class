// מערך דוגמה בגודל 10 (במקרה הזה - הוא פלינדרום!)
const arr = [5, 8, 2, 7, 1, 1, 7, 2, 8, 5];

// נניח מראש שהמערך הוא פלינדרום, עד שיוכח אחרת
let isPalindrome = true; 

// נרוץ בלולאה רק עד החצי של המערך (5 סיבובים)
for (let i = 0; i < arr.length / 2; i++) {
    
    // arr[i] זה האיבר מההתחלה (שמאל)
    // arr[arr.length - 1 - i] זה האיבר המקביל מהסוף (ימין)
    
    if (arr[i] !== arr[arr.length - 1 - i]) {
        // מצאנו חוסר התאמה! 
        isPalindrome = false;
        break; // עוצרים את הלולאה מיד (אין טעם להמשיך לבדוק)
    }
}

// בסוף הבדיקה, נדפיס את התוצאה
if (isPalindrome) {
    console.log("The array is a palindrome!");
} else {
    console.log("The array is NOT a palindrome.");
}

