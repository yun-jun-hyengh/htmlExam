/**
 * break문
 * - 반복문(for, while문)의 실행을 중지시키거나 
 * switch문을 중지시키기 위해 사용된다 
 * - 특정 조건을 만나면 다음 실행문이 존재하더라도 강제로 벗어남 
 */
let num = 2;

switch (num) {
    case 1:
        console.log("가위");
        break;
    case 2:
        console.log("바위");
        break;
    case 3:
        console.log("보");
        break;
}
// switch문의 default는 생략이 가능하다 