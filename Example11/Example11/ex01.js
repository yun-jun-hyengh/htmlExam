/**
 * switch문 
 * - 먼저 식을 계산하고 그 결과 값과 일치하는 case문으로 분기 
 * - case문의 값은 각각 달라야 하며, case문의 값의 순서는 크기와 
 * 상관없이 임의의 순서로 작성해도 된다 
 * - default 키워드는 생략할 수 있다 
 * 
 * 형식)
 * switch(자료){
 * case 조건1:
 *      코드...
 * case 조건2:
 *      코드...
 * default
 *      코드,,,
 * }
 */

let number = 19;
switch (number % 2) { // 나머지 연산자를 사용하여 홀수와 짝수를 구별 
    case 0:
        console.log("짝수입니다.");
        break;
    case 1:
        console.log("홀수입니다.");
        break;
    default:
        console.log("숫자가 아닙니다.");
        break;
}


