/**
 * for-in
 * - 객체의 속성을 열거할 때 사용하는 반복문임
 * - for-in문은 주어진 객체의 속성을 반복해서 순회하며 
 * 각 속성 이름을 변수에 할당하여 사용한다 
 * 
 * 형식)
 * for(variable in object){
 * 
 * }
 * variable : 각 프로퍼티 이름을 저장할 변수 
 * object : 순회할 객체 
 */
const person = {
    name: "윤준형",
    age: 30,
    address: "부산시 수영구"
};

// 루프를 돌때마다 반복변수에 해당 프로퍼티 이름이 할당된다 
for (let i in person) {
    console.log(i); // 프로퍼티 이름 출력 !! 
}

//person[i] : person 객체의 프로퍼티의 값을 가져온다 !! 
for (let i in person) {
    console.log(i + " : " + person[i]);
}
