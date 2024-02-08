// 자바스크립트 난수 생성 (1 ~ 10)
let number = Math.floor(Math.random() * (10 - 1) + 1);
//console.log(number);
/**
 * 숫자가
 * 7일경우 : 커피
 * 5일경우 : 우유
 * 9일경우 : 요구르트
 * 7 ~ 5 ~ 9도 아닌경우 꽝을 출력하세요 !! 
 */
switch (number) {
    case 7:
        console.log("커피");
        break;
    case 5:
        console.log("우유");
        break;
    case 9:
        console.log("요구르트");
        break;
    default:
        console.log("꽝!!");
        break;
}