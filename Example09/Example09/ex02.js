/**
 * 자바스크립트 변수 선언 
 * - js에서 변수 선언 방식은 var, let, const
 * 
 * var
 * - 변수를 한 번 더 선언을 했음에도 불구하고 에러가 
 * 나오지 않고 각기 다른 값이 출력된다 
 * - 중복 선언 가능 
 * 
 * let
 * - 중복 선언 불가능 
 * - 재할당 가능 
 * 
 * const
 * - 중복 선언 불가능 
 * - 재할당 불가능 
 * - const는 constant(상수)를 뜻하기 때문에 한 번만 
 * 선언이 가능하다 
 */

// var
var name = '윤준형';
console.log(name);

var name = 'js';
console.log(name);

// let
let varLet = 10;
console.log(varLet);
varLet = 20;
console.log(varLet)

// const
const varConst = 100;
console.log(varConst);

//varConst = 200;
//console.log(varConst);

