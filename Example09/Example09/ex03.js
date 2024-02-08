/**
 * js에서의 데이터 타입 
 * - 기본적으로 원시(primitive) 타입과 객체(object)
 * 타입으로 구분됨 
 * 
 * 원시타입
 * - 숫자(number), 문자열(string), 블리언(boolean)
 * null, undefined가 있다 
 * 
 * 객체타입
 * - 함수(function), 배열(array), 객체(object) 등등 
 */

var a = 10;
console.log(a);
console.log(typeof(a));
a = true;
console.log(a);
console.log(typeof(a));

// 숫자타입
var numberVar1 = 10;
var numberVar2 = 3.14;
var numberVar3 = 7e8;
console.log(numberVar1); 
console.log(typeof(numberVar1));

console.log(numberVar2);
console.log(typeof(numberVar2));

console.log(numberVar3);
console.log(typeof(numberVar3))

// 문자열 타입 
let str1 = "윤준형";
let str2 = '김길동';
console.log(str1); console.log(typeof(str1));
console.log(str2); console.log(typeof(str2));

// 불리언 타입 
let bool1 = true; let bool2 = false;
console.log(bool1); console.log(typeof(bool1));
console.log(bool2); console.log(typeof(bool2));

// 객체 타입 
let obj = {'name':'John', age: 30};
console.log(obj); console.log(typeof(obj));

// 배열 타입
let arrayList = [10,20,30,40,50];
console.log(arrayList); 
console.log(typeof(arrayList));

