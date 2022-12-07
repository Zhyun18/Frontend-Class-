/*
    1) 빌트인(Built-in)
        - ECMAScript 사양에 정의 객체. 전역 공통의 기능을 제공. 
        - 표준이기 때문에 실행환경에 상관없이 사용이 가능. 
    
    2) 호스트 객체
        - 개발의 편의성을 위해서 실행환경에서 제공하는 객체. 
        - 대표적인 예로 document는 html 문서에 대한 메서드와 프로퍼티를 제공하는 객체 => 브라우저가 제공. 
        - 실행환경에 따라서 제공되는 호스트 객체가 달라진다. 
    
    3) 사용자 정의 객체
        - 사용자 필요에 따라 정의한 객체. 

*/

/*
    전역 객체 
        -JavaScript 엔진이 가장 먼저 만드는 특수한 객체.
        -JavaScript가 실행되는 환경에 따라 달라진다.  => 브라우저에서는 window, node.js에서는 global을 통해서 접근 가능. 
        -어디에도 속하지 않는 최상위 객체. => 프로토타입 상에서 최상위를 의미하는 것이 아니다.
        -표준 빌트인 객체와 호스트 객체, var 키워드로 선언된 전역 변수, 전역 함수를 프로퍼티로 갖는다. 
            => 전역 객체의프로퍼티를 참조할 때 전역 객체를 생략할 수 있다. => window.document와 document는 동일한 객체를 가리킨다. 
        - 여기서는 브라우저 환경에서 생성되는 window 객체 위주로 설명한다. 
        - ES11 에서 도입된 globalThis 를 통해서 실행환경 상관없이 접근이 가능하다. 



*/
console.log(globalThis); //globalThis를 통해서 실행환경 관계없이 전역 객체에 접근이 가능하다.
window.console.log("진짜 심각하게 배고픔");
var a = 1; // var 키워드로 선언해야 콘솔창에 뜸. let은 안됨.
// 전역 객체의 프로퍼티가 된다.
console.log(window.a);
{
  aa = 10;
}
function sum(a, b) {
  num = 10; // var 생략 시 함수 안에서 작성해도 함수 레벨 스코프가 지원 되지 않기 때문에 window.num 프로퍼티로 등록된다.
  return a + b;
}
for (var i = 0; i < 10; i++) {} // var 키워드는 블록레벨스코프를 지원안하기 때문에 window.i 프로퍼티에 등록된다.
sum(10, 20);

console.log(window);
console.log(num, i);
// var a -> 호이스팅이 일어남. sum 도 마찬가지.
// 호이스팅 -> 자바스크립트 실행 전 필요한 객체들을 위에서 먼저 끌어올리는 것처럼 보이는 어쩌구.
// 주의해야할 것 c= 10; (이상한점) -> , {aa =10;} -> 변수 키워드가 없음 . 변수 키워드 생략

/*
    빌트인 객체
*/
//Date() : 날짜와 시간과 관력된 메서드와 프로퍼티를 제공하는 객체를 생성. => 생성된 객체를 참조하면 로컬 시간이 출력된다.
// => 1970년 1월 1일 기준으로 ms 단위로 경과한 시간
// => 생성된 시점이 기준이 된다.
let today = new Date(); // 생성자 함수이기때문에 new 키워드 작성해야한다.
let year = today.getFullYear();
let month = today.getMonth() + 1; // 1월이 0부터 시작한다. 정확한 달수 출력하려면 1을 더해야한다.
let date = today.getDate();
let day = today.getDay(); // 0부터 시작 0(일요일) ~6(토요일)
//console.log(year); // 2022 가 출력.
//console.log(today); // 객체 프로퍼티가 나오지 않고 현재시간이 나옴.

console.log(`${year}년 ${month}월 ${date}일 ${day}`);
console.log(year, month, date, day); //2022 11 출력.// date 까지 입력하면 12월이라고 제대로 나옴. //  day -> 월화수목금토 개념을 숫자로 (화요일 기준: 2로 출력)

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
console.log(hours, minutes, seconds);

// Date.prototype.toLocaleDateString() : 사용자의 문화권에 맞게 시간 표기를 해준다.
/*
let dateStr = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
});
console.log(dateStr);
*/

let dateStr = today.toLocaleDateString("ko-KR", {
  dateStyle: "full",
});

let timeStr = today.toLocaleTimeString("ko-KR", {
  timeStyle: "full",
});
console.log(dateStr, timeStr);
// 한번에 출력하는 방법.

today.setFullYear(2021);
today.setMonth(9); // 10월을 찍고 싶을때 -1 해서 넣기 (0부터 시작이니까.......)
today.setDate(30);
today.setDate(today.getDate() - 1); // 30 - 1 = 29

//날짜로 변환 가능한 문자열을 통해서 특정 날짜를 생성할 수 있다.
let yesterday = new Date("2022-11-6");
console.log(yesterday);

console.log(today);

// Math : 수학관련 프로퍼티와 메서드 제공 => 주로 정적 프로퍼티(메서드 포함)를 사용한다.
console.log(Math.PI * 2 * 10); //반지름 길이가 10인 원의 둘레
console.log(Math.sin(Math.PI / 4)); // PI = 180도

let float = 1.5234623547;
let int = parseInt(float); // 실수를 정수로 -> 소수점 이하 숫자 내림 , parseInt( ) : 실수를 정수로 바꿀 때도 사용한다. 소수점 이하의 숫자를 버린다. (내림)
console.log(float, int); // int : 정수, float: 실수, 팔스인트라고 발음한다.

// 소수점 이하 내림
console.log(Math.floor(float)); // 1이 출력됨. 내림 처리한다. 소수점 이하의 숫자를 버린다.

// 소수점 이하 올림
console.log(Math.ceil(float)); // 2가 출력됨. 올림 처리한다. (1.1 이라도 2로 올려버리기~)소수점 이하의 숫자를 버리고 숫자를 증가시킨다.

// 소수점 이하 반올림
console.log(Math.round(float)); // 반올림 처리한다. 이 경우 1.5234 -> 2 로 출력되무.

// 문제 111 -> 120
/*
var num = 111; // let 은 왜 안돼나요...?
console.log(((num + 9) / 10) * 10);
*/
console.log(Math.ceil(111 / 10) * 10);
// 십의자리 올림하고 싶으면 / 100 * 100 하면 옼케.

//Math.random() : 0~1 사의의 랜덤한 실수를 반환한다.(실제 랜덤은 아님.)
console.log(Math.floor(Math.random() * 10) + 1); // 0 < x < 10  -> x10  0~0.99999 = 0, 1~1,99999 = 1 버려~ 0 < x < 9 // 실행할떄마다 0~9 사이의 수 출력됨.
// 1~10 출력하려면 +1 하면 된다 (위의 결과값에) , * -> 범위를 늘려주는 역할, + -> 시작점을 늘려주는 역할.
// 1~9 출력하고 싶으면 * 10 대신 *9 +1 , 2~9 -> * 8 + 2

// 1~45 사이의 로또 6개 번호 추첨하기 (중복 니니~) => 반환하는 함수 만.들.기
/*
 1) 1~45 가 들어있는 배열에서 랜덤한 인덱스 6번을 꺼내면 됨. => 인덱스 범위가 넘징 ㅏㄶ게 주의
 2) result 담으면서 이미 있는 값인지 확인하기 (배열 관련 함수)
*/

/* 나의 시도
function getLottoNum() {
  Math.floor(Math.random() * 45 + 1); // 1~45
  let lotto = [1, 2, 3, 4, 5, 6];
  lotto.push(7);
  document.write(lotto);
  //return [1~45 중 6개, 중복 x]
}
*/

function getLottoNum() {
  let result = [];
  // result 배열의 길이가 6이 되기 전까지만 실행 => 요소가 6개가 되는 순간 반복을 멈춘다.
  while (result.length < 6) {
    // result 가 여섯개 까지
    let num = Math.floor(Math.random() * 45) + 1;
    if (!result.includes(num)) result.push(num); // result 배열에 랜덤한 수 num이 없을때만 push  배열의 요소가 있는지 확인하는 함수 .includes -> 중복피하기 위해 !result
  }

  return result;
}

console.log(getLottoNum());

// 나 왜 오류 뜨냐? 