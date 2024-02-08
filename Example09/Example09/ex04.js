/**
 * 키워드란?
 * - 프로그래밍 언어에서 어떤 기능을 하도록 미리 
 * 예약해 놓은 명령어를 의미한다 !! 
 * - 키워드는 변수명으로 사용할 수 없다 !! 
 * - var, let, const, if, else, else if, for, while
 * object, function, try, catch 등등 
 */
// let var = 10;
// console.log(var);

/**
 * 연산자
 * - 산술연산자, 할당연산자, 비교연산자, 논리연산자 
 */

// 산술연산자 
var a1 = 10;
var a2 = 20;
var result1 = a1 + a2;
var result2 = a2 - a1;
var result3 = a1 * a2;
var result4 = a2 / a1; // 몫 출력 
var result5 = a2 % a1; // 나눗셈 나머지 출력 
console.log("덧셈결과 : " + result1);
console.log("뺄셈결과 : " + result2);
console.log("곱셈결과 : " + result3);
console.log("나눗셈 몫 : " + result4);
console.log("나눗셈 나머지 : " + result5);

// 할당연산자(복합대입연산자)
let varlet1 = 10;
console.log(varlet1);
varlet1 += 20;
//varlet1 = varlet1 + 20; (위의 코드를 풀어서 작성한 예제)
console.log(varlet1);

varlet1 -= 5; // varlet1 = varlet1 - 5
console.log(varlet1);

varlet1 = varlet1 * 2;
console.log(varlet1);

varlet1 /= 2;
console.log(varlet1)

varlet1 = varlet1 % 2;
console.log(varlet1);

// 비교 연산자 
// 비교 연산자는 두 개의 값을 비교하여 true 또는 
// false 값을 반환하는 연산자임 
let a = 10;
let b = 5;
/**
 * ==(Equal Operator)
 * - 단순히 값이 같은지만 비교한다 !! 
 * 
 * === (Strict Equal Operator) (권장!!)
 * - 조금 더 엄격하게 비교할 때 사용
 * - a와 b를 비교했을 때 값과 값의종류(Data Type)이 
 * 모두 같은지를 비교해서 같으면 true, 다르면 false
 * 라고 한다 
 */
console.log(a == b); // (==) 같다
console.log(a === b); // (===)같다 
console.log(a != b); // (!=)같지 않다
console.log(a !== b); // (!==)같지 않다
console.log(a < b); // b가 a보다 크냐?
console.log(a > b); // a가 b보다 크냐?
console.log(a <= b); // b가 a보다 같거나 크냐?
console.log(a >= b); // a가 b보다 같거나 크냐?











