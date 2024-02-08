/**
 * 100점 만점 중 100 ~ 90점이면 "A"학점
 * 89 ~ 80점이면 "B" 학점
 * 79 ~ 70점이면 "C" 학점
 * 69 ~ 60점이면 "D" 학점
 * 60점 미만이면 "F" 학점 을 출력하세요 
 * 
 */
var score = 89;

if (score <= 100 && score >= 90) {
    console.log("A학점");
} else if (score <= 89 && score >= 80) {
    console.log("B학점");
} else if (score <= 79 && score >= 70) {
    console.log("C학점");
} else if (score <= 69 && score >= 60) {
    console.log("D학점");
} else if (score < 60 && score >= 0) {
    console.log("F학점");
} else {
    console.log("학점을 잘못 입력하셨습니다.");
}