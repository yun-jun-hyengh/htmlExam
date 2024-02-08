/**
 * 중첩 for문
 * - for문 안에 또 다른 for문
 * 형태) 
 * for(초기식; 조건식; 증감식){
 *      for(초기식; 조건식; 증감식){
 *      
 *      }
 * }
 */

// 구구단 예제 
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log("%d * %d = %d", i, j, i * j);
    }
}