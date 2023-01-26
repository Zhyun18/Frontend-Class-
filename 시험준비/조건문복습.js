/* 

[개념 되돌아 보기]

조건문 (conditioonal statement)

- 조건에 따라서 실행할 코드를  선택.
- 조건에 따라 프로그램 제어
- 코드 블록은 {} 안의 코드를 하나의 실행 단위로 작성 => 제어문이나 함수의 구현 구분을 작성. 

if 문

- {} 안의 조건식이 true 라면 코드 블록을 실행하고, fasle 라면 실행 하지 않음.
- 조건식과 코드 블록 중 하나라도 작성하지 않으면 오류가 발생한다.
- 실행할 코드가 한줄이라면 {} 생략이 가능. 

if~else 문

- 조건식이 true 라면 if 문의 코드를 실행하고, false 라면 else 문의 코드 블록을 실행한다.
- 조건에 부합하는지 / 부합하지 않는지  -> 2가지 경우에 대해서 미리 작성. 

else if 문 

- 앞의 if 문의 조건식이 false 인 경우 eles if 의 조건에 해당하는 지 확인후, true 라면 실행, false 라면 실행하지 않는다.
- else if 문은 몇개든지 더 붙일 수 있다.
- 앞에서 else if 문을 사용했다면, else 문은 무조건 마지막에 와야한다. 

switch

- () 안의 값(표현식)으로 각 case 문의 값과 비교해서 해당뙤는 케이스를 실행한다. 
- 해당하는 case문에 도달하면 이후의 모든 case문을 실행한다.
- break문을 사용하면 이후의 case문을 실행하지 않고 switch 탈출
- default문은 기본으로 실행되는 문. 

*/

// (if문 코드작성) var num =1, 양수라면 -> num은 양수입니다 출력, 반대의 경우도
var num = 1;
if (num > 0) {
  console.log("num은 양수입니다.");
}


if (num < 0) {
  console.log("num은 음수입니다.");
}


// 피드백 -> num이 양수일 때의 조건문, num이 음수일 떄의 조건문 각자 작성. 중첩은 ㄴㄴ

// (if~else문 작성) var age = 25, age 는 30대입니다/ 30대가 아닙니다 출력하기.

var age = 25;
if (age >= 30) {
  console.log("30대입니다.");
} else {
  console.log("30대가 아닙니다.");
}

// 중첩 ㄴㄴㄴㄴ 따로 작성, else 문은... 따로 조건식이 필요없다껭!!!! if/ else if/ else --> 조건/ 다른조건/ 마지막.

// (if~else if~ else문 작성) var num02 =0 -> 양수/음수/0 일때 출력

var num02 = 0;
if (num02 > 0) {
  console.log("num02는 양수압니다.");
} else if (num02 < 0) {
  console.log("num02는 음수입니다.");
} else {
  console.log("num02는 0입니다.");
}

// (문제 1.) 변수 num03= 105 의 값이 짝수인지 혹수인지 출력.

var num03 = 105;
if (num03 % 2 === 0) {
  console.log("num03은 짝수이다.");
} else {
  console.log("num03은 홀수이다.");
}

// (문제 2.) 변수 num03의 값이 5의 배수이면서 100보다 크면 num 03의 값 출력해보기. -
//  -> 조건이 두개쥬~?

if (num03 % 5 === 0 && num03 > 100) {
  console.log(num03);
}

// "num03" 이라 콘솔창에 찍히면 num03의 값이아니라 num03 나와유...
// 연산자 &&(and)을 이용한 방법.

// if 문 중첩하여 사용! 앞의 조건도, 그 다음의 조건도 만족시켜야함. (true)

if (num03 % 5 === 0) {
  if (num03 > 100) {
    console.log(num03);
  }
}

// if 문의 중첩 -> 분기처리를 더 구체적으로 해야할 때 사용.

// (문제 3.)  두 변수 num03/ data = "안녕하세요." 의 데이터의 타입이 문자열이라면 문자열입니다 출력, 숫자라면 숫자형입니다 출력. 둘 다 아니면 문자열도 숫자열도 아닙니다 출력.

/*
typeof -> 변수의 데이터 타입을 알려주는 식별자
console.log(typeof num03); -> number 라고 나옴. 
*/

if (typeof num03 === "string") {
  console.log("문자열입니다.");
} else if (typeof num03 === "number") {
  console.log("숫자형입니다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}

// else if임 elseif ifelse  도 아님 ㅋㅋ

var data = "안녕하세요.";

if (typeof data === "string") {
  console.log("문자열입니다.");
} else if (typeof data === "number") {
  console.log("숫자형입니다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}

// (switch 연습) age02 =30, 30대,40대인 케이스 작성및 출력, 둘다 아닌 경우, default 문도 작성
var age02 = 30;

switch (age02) {
  case 30:
    console.log("30대입니다.");
    break;
  case 40:
    console.log("40대입니다.");
    break;
  default:
    console.log("30대도 40대도 아닙니다.");
}

// case value:
// switch (key) {}

//  (문제 4.) 문제 3을 switch 문으로 작성.
switch (typeof num03) {
  case "string":
    console.log("문자열입니다.");
    break;
  case "number":
    console.log("숫자형입니다.");
    break;
  default:
    console.log("문자열도 숫자형도 아닙니다.");
}

// switch (key) -> key자리에 데이터 반환 "값"을 넣는 것임~!

// (문제 5.) 연령대 판독기 만들기 (30-39)

/* 힌-토 
-parseInt() : 실수를 적으면 정수로 바꿔줌 (내림)
-Math..floor: 소수점 이하의 숫자를 내림
-switch(Math.floor(age02 / 10))
*/

switch (parseInt(age02 / 10)) {
  case 3:
    console.log("30대입니다.");
    break;
  case 4:
    console.log("40대입니다.");
    break;
  default:
    console.log("30대도 40대도 아닙니다.");
}

// (문제 6.) score = 90; 변수의 값에 따라서 grade 변수의 값을 변경.
// 90점 이상 A, 80~89점 이상 B, 70~79 : C,60~69: D, 그 외에는 F

var score = 90;
var grade;

switch (Math.floor(score / 10)) {
  case 9:
    console.log("grade: A");
    break;
  // 100점은 어떻게  포함s?
  case 8:
    console.log("grade: B");
    break;
  case 7:
    console.log("grade: C");
    break;
  case 6:
    console.log("grade: D");
    break;
  default:
    console.log("grade: F");
}

// 더 간편하게 작성하는 법
/* 
switch (Math.floor(score / 10)) {
    case 9:
    grade = "A";
    break;

    (이하생략)

}

console.log(grade);
*/

// 조건문 (~라면,~일떄) 으로 따지는 경우 ->if 문, 값으로 따질땐 -> switch
