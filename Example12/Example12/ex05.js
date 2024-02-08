/**
 * while문
 * - 조건식이 참(true)일 동안 반복적으로 코드 블록을 실행 
 * 조건이 거짓(false)이 되면 while문을 탈출한다 !! 
 * 형식)
 * while(조건식){
 *      코드...
 * }
 */
let i = 1; // 초기식
while (i <= 10) { // 조건식
    console.log(i);
    i++; // 증감식 
}

let j = 1;
while (j <= 10) {
    console.log(j);
    if (j == 10) {
        console.log("현재 " + i + " 이므로 반복문 탈출!!~~00");
    }
    j++;
}
/**
 * for문과 while문 
 * for문은 초기식 조건식 증감식이 한곳에 몰려있어 가독성이 좋다 
 * while문은 초기식 조건식 증감식이 따로 떨어져 있어 가독성이 나쁘다 
 * 
 * while문은 종료 조건이 명확하지 않을 때 사용하는 것이 좋다 
 * for문은 종료 조건이 명확할 때 사용하는 것이 좋다 
 */