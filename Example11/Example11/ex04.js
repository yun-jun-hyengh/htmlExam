const date = new Date(); // 현재 날짜와 시간을 가지는 객체를 리턴한다
//console.log(date);
const hour = date.getHours(); // 현재 몇시인지를 출력한다 
//console.log(hour);
switch (true) {
    case hour < 11:
        console.log("아침식사시간");
        break;
    case hour < 15:
        console.log("점심식사시간");
        break;
    default:
        console.log("저녁식사시간");
        break;
}