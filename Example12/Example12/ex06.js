// 무한루프 
// 말 그대로 무한히 실행되는 루프 
// 종료시키기 위해서는 특정 조건을 루프내에서 걸어줘야 한다 !! 
let i = 1;
while (true) {
    console.log(i);
    if (i == 10) {
        break;
    }
    i++;
}