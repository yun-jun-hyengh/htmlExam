/**
 * 1 ~ 100 까지 모든 수의 곱을 구하세요 !! 
 */
let mul = 1;
for (let i = 1; i <= 100; i++) {
    mul = mul * i;
}
console.log(mul);
/**
 * arr 배열에서 최대값을 구하세요 !! 
 * 루프 돌릴때 length 사용하세요 !! 
 */
let arr = [52, 273, 103, 32, 57, 103, 31, 2]
let max = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("arr 배열의 최대값 : " + max);