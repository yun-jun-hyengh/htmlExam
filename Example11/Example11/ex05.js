/**
 * 중첩 if문
 * - 조건문 안에 조건문이 있으면 중첩 if문 이라고 한다 
 * 
 * 형식)
 * if(조건식){
 *      if(조건식){
 * 
 *      }
 * }
 */
let score = 59;

if (score >= 90) {
    if (score >= 95) {
        console.log("A+학점");
    } else {
        console.log("A학점");
    }
} else if (score >= 80) {
    if (score >= 85) {
        console.log("B+학점");
    } else {
        console.log("B학점");
    }
} else if (score >= 70) {
    if (score >= 75) {
        console.log("C+학점");
    } else {
        console.log("C학점");
    }
} else if (score >= 60) {
    if (score >= 65) {
        console.log("D+학점");
    } else {
        console.log("D학점");
    }
} else {
    console.log("F학점");
}



