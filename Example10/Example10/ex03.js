/**
 * 제어문(조건문)
 * if문
 * - if문은 조건식이 참(true)인 경우만 블록 
 * 안의 코드가 실행되는 분기문 
 * 
 * if(조건식){
 *      코드..(조건식이 참일경우)
 * } else {
 *      코드..(조건식이 거짓일 경우 )
 * }
*/
num = -10;
if (num > 0) {
    console.log("양수입니다.");
} else {
    console.log("음수입니다.");
}

let var1 = 10;
let var2 = 20;
if (var1 < var2) {
    console.log(var2 + "이 더 큽니다.");
} else {
    console.log(var1 + "이 더 큽니다.");
}

let money = true;
if (money) {
    console.log("택시를 타고 가라");
} else {
    console.log("걸어가라!!");
}

let pay = 2000;
let card = true;

if (pay >= 3000 || card) {
    console.log("택시를 타고 가세요!!~~");
} else {
    console.log("그냥 걸어가세요 !!~~");
}

let a = 6;
if (a % 2 == 0 && a % 3 == 0) {
    console.log("변수 a는 2의 배수이면서 3의 배수임");
} else {
    console.log("변수 a는 2의 배수이면서 3의 배수가 아님");
}









