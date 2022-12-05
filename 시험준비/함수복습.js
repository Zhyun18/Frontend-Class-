/* 

[개념복습]

함수(Function)

- 반복적으로 실행될 코드를 미리 작성 후 재사용. 
- function 뒤에 함수의 이름을 작성하고 ()을 붙임.
- () 안에는 함수 실행에 필요한 값을 매개변수(a.k.a parameter)로 전달.
- 매개 변수는 여러개도 가능하고, 없어도 된다.
- 매개 변수를 통해서 전달되는 실제 값을 인자(Argument)라고 함.
- 변환해줄 값이 있다면 return 뒤에 표현식을 작성. 
- 변환해줄 값이 없다면 생략 가능 -> undefined로 반환. 
- return은 함수의 종료를 의미한다 -> return 이후의 코드는 실행되지 않음.
- 작성할 함수를 실행할 때는 함수이름(매개변수)의 형태로 작성.
- 함수를 호출한다고 한다. (call)
- 표현식이 필요한 자리에 함수의 실행 결과가 올 수 있다. 

기명함수 (Name Function) 
- 함수 선언식
- 함수 호이스팅이 일어남.
- 함수 선언 이전에 호출해도 잘 작동. 
- 구현부도 같이 호이스팅. 

익명함수 (Annoumous Function)
- 함수 표현식
- 함수 호이스팅이 일어나지 않는다.
- Java Script 는 함수를 값으로 취급 
- 값으로써 함수를 전달할 때는 익명함수를 사용하여 간결하게 작성 가능. 

화살표 함수 (Arrow Function) - ES6(2015)
- function의 키워드를 사용하지 않고 "=>" 을 통해서 간결하게 작성 가능.
- 함수 표현식으로만 작성 가능하다 -> 함수 호이스팅이 일어나지 않는다. 
- 중괄호와 return 키워드를 생략하면 표현식의 값을 return 한다.
- 기본적으로 {} 를 '코드블록'이라고 인식.
- 반환값이 객체라면 () 안에 {} 를 작성해야 return 생략이 가능. 
- 다른 함수의 값으로 함수를 전달할 때 많이 사용.
- this 바인딩이 일어나지 않음. 

콜백 함수 (Callback Funcgtion)
- 함수의 값으로 전달되는 함수.
- 함수에서 실행되어야 하는 코드가 나중에 정해질 때 사용한다.
- 콜백함수로 익명함수를 많이 사용한다. 
- 값으로 전달할 때는 호출이 아니라 함수 자체를 전달해야 한다. 

 */

// a,b를 더하는 함수 선언하긔.
function sum(a, b) {
  // 괄호에 함수 실행 시 필요한 값 (매개변수) 입력
  return a + b; // 함수의 반환할 값을 return 뒤에 작성한 것.
}

sum(3, 4);
console.log(sum(3, 4)); // 함수 실행: 함수이름(매개변수)

// 프로퍼티의 값이 함수면 '메서드' 라고 부른다.

// num03 =10, percentage =5, sum 함수 실행 후 출력.

console.log(sum(10, 5));
let num03 = 10;
let percentage = 5;

// 매개 변수와 return 값이 없는 함수. 함수명: greeting, 안녕하세요 문구 출력

function greeting() {
  console.log("안녕하세요.");
}
greeting();

// 외부에서 실행하는 경우에서 필요한 값을 이미 아는 경우 매개 변수를 생략하기도 한다.

function getPercentage() {
  return num03 * percentage; // 위에서 이미 num03, percentage 선언 후 할당해서 우리는 안다.
  console.log("함수 종료."); // return 이후의 코드는 실행되지 않는다.
}
console.log(getPercentage()); // 매개변수 생략 가넝한~

// 빼기, 곱하기, 나누기 함수 만들어보기 (두개의 수)
function subtract(num01, num02) {
  return num02 - num01;
}

function multiply(num01, num02) {
  return num01 * num02;
}

function divide(num01, num02) {
  return num01 / num02;
}

// 세개의 수의 평균을 출력하는 함수 만들기 매개변수 (a,b,c), 함수명 colsAverage
function consoleAverage(a, b, c) {
  console.log((a + b + c) / 3); // () -> 밖에서 () 로 묶어주면 끗.
}

consoleAverage(1, 2, 3);
// return 대신 함수에서 콘솔 찍고, 함수명 작성해서 출력한듯.

// get Total, getAverage 함수 만들긔
function getTotal(a, b, c) {
  return a + b + c;
}

function getAverage(a, b, c) {
  return (a + b + c) / 3;
}

// divide 함수, getTotal 함수 이용해서 get Average 함수와 동일한 출력값 같게 함수 작성하기.
console.log(divide(getTotal(3, 6, 9), 3));

// 함수는 작은 단위로 쪼개서 사용하는 것이 좋다 ^_^ -> 한줄 작성이라고 다 좋은 것이 아니다 이말이야~
var total = getTotal(3, 6, 9);
var avg = divide(getTotal, 3);

// 기명함수
func();
function func() {
  console.log("기명함수입니다.");
}

// 익명함수

let getData = function fetchData() {
  console.log("익명함수입니다.");
};
/*
- 식별자가 필요하다. 
- 함수 선언식 혹은 함수 표현식의 형태로 식별자를 작성해야 한다.
- 값으로 전달되는 경우에는 식별자가 필요 없다.
- fetchData() : 변수의 이름으로 접근해야함. 
*/

// 화살표 함수 연습
let add = (a, b) => {
  return a + b;
};

let minus = (a, b) => {
  // subtract 라는 함수이름은 위에서 선언했기 때문에 다른 이름 사용.
  return a - b;
};

console.log("2 - 1 : ,", minus(3, 2));

// 화살표 함수를 이용하여 두 문자열을 연결하는 함수를 만들어 보자 ^_^
let addString = (str1, str2) => {
  return str1 + str2; // 문자열 연산이라고 "" 안에 넣을 필요없음.
};
console.log(addString("안녕", "하세요"));
console.log(add("안녕", "화살법"));
// 위에서 만든 add 함수와 기능차이가 읍다~

let getObj = (age, name) => ({
  age: age,
  name: name,
});
// {} -> 코드블럭, 객체로 인식됨.
// Q.소괄호 넣는 이유..?

let user = getObj(24, "jeehee");
console.log(user);

let globalFunc = function () {
  console.log("외부 함수 실행");
  let inner = function () {
    console.log("내부 함수 실행");
  };
  inner();
  console.log("외부 함수 실행");
};
globalFunc();
/*
- 스택 구조: First in Last Out. (FI) (LO)
- () 안을 생략하면 함수 그 자체를 가리킴. 
- 함수를 값으로 사용할 떄는 호출이 아니라 식별자를 참조해야함.
*/

function foo() {
  return "foo";
}

let copyFunc = foo;
console.log(copyFunc());

// () 잊지말기

// 콜백함수

function repeat(repeatCount, callback) {
  for (let i = 0; i < repeatCount; i++) {
    callback(); // 괄호 안에 미리 작성할 코드를 작성하면 된다.
  }
}

// 이름 없는 함수로 전달하는 경우 repeatCount =5, 코드 실행 문구 출력하기
repeat(5, function () {
  console.log("코드 실행");
});

// 값으로 전달하는 경우 -> 함수명 "print"
function print() {
  console.log("코드 실행");
}

repeat(5, print);
