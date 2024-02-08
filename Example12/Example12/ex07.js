// 문자열 다루기 
const str = "hello world";
console.log(str.length);
console.log(str.charAt(3));
console.log(str.indexOf("o", 5));
console.log(str.slice(0, 5)); // 시작위치, 끝위치 - 1

// 객체 다루기 
const obj = { name: "윤준형", age: 30 };
console.log(obj.name); console.log(obj.age);
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 백틱을 사용하면 ${}를 사용해서 문자열과 변수를 
// 적절히 사용할 수 있다 !! 
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}