// 1 ~ 10까지의 합계를 구하는 코드 
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("1 ~ 10까지의 합계 : " + sum);

// 1 ~ 100까지의 짝수들의 총 합계를 구하세요 !! 
let sum1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum1 = sum1 + i;
    }
}
console.log("1 ~ 100 까지의 짝수 합 : " + sum1);