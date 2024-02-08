// 삼항연산자 
// 삼항 연산자는 참/거짓에 따라 선택적으로 실행됨 
// 간결하게는 표현이 가능하나 
// 너무 많이 사용하면 소스코드에 가독성이 떨어진다 
let a = 10;
let b = 20;
// 이 전체를 하나로 봐야 한다 
let value = (a > b) ? true : false;
console.log("value 결과 값 : " + value);

let num = 17;
let result = (num % 2 == 0) ? "짝수" : "홀수";
console.log(result);

if (num % 2 == 0) {
    console.log("짝수");
} else {
    console.log("홀수");
}

// 60살 이상이면 노약자입니다
// 60살 보다 작으면 노약자가 아닙니다를 출력하세요 
// 단 삼항연산자를 사용하여 작성하세요 !!~ 
var age = 60
var value1 = (age >= 60) ? "노약자" : "노약자 아님";
console.log("결과 : " + value1);