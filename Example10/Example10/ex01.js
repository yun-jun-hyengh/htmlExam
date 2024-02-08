// 논리 연산자 
// &&(and), ||(or), !(not)
let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true

// 증감 연산자(++, --)
/**
 * let x = 1
 * 
 * 사용법) 
 * x++, ++x, --y, y--
 * 
 * 전위증감(++x, --y) : 먼저 증감 후에 해당 문장 실행
 * 후위증감(x++, y--) : 해당 문장을 실행하고 증감 
 */
let x = 1;
console.log(++x); // 2
// 후위증감이므로 바로 3으로 증가시키는게 아닌
// 다음 라인인 26번째 라인에서 3으로 증가된걸 확인할 수 있다
console.log(x++);
console.log(x);

let num = 10;
num--;
console.log(num);
num = num - 1;
console.log(num);


