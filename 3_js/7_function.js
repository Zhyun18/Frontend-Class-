/* 
    함수 (Function)
        -반복적으로 실행될 코드를 미리 작성 후 재사용한다. 
        -function 뒤에 함수의 이름을 작성하고 ()을 붙인다. 
            => () 안에는 함수 실행에 필요한 값을 매개변수(Parameter)로 전달. 
            => 매개 변수는 여러개도 가능하고, 없어도 된다.
            => 매개 변수를 통해서 전달되는 실제 값을 인자(Argument)라고 한다.
        -반환해줄 값이 있다면 return 뒤에 표현식을 작성한다. 
            => 없다면 생략 가능. => undefined 반환
            => return은 함수의 종료를 의미한다. return 이후의 코드는 실행되지 않는다. 
        -작성한 함수를 실행할 때는 함수이름(매개변수)의 형태로 작성. 
            => 함수를 호출(call)한다고 한다. 
        -표현식이 필요한 자리에 함수의 싫애 결과가 올 수 있다. 
*/
function sum(a, b) {
  return a + b;
}

sum(3, 4);

console.log(sum(3, 4));
// log 도 소괄호를 열고닫으니까 함수다.
// .은 객체이다.
// <> 프로퍼티의 값이 함수면 매서드라고 부른다.

console.log(sum(5, 10));

let num03 = 10;
let percentage = 5;

// 매개변수와 return(반환값)이 없는 함수 -> 비우면 됨. 호출 시에도 비우면 ㅇㅋ
function greeting() {
  console.log("안녕하세요.");
}

// 외부에 실행하는데 필요한 값들이 이는 경우 매개 변수를 생략하기도 한다.
function getPercentage() {
  return (num03 * percentage) / 100;
  //return 이후의 코드는 실행되지 않는다.
  console.log("함수 종료");
}
console.log(getPercentage());

greeting();
greeting();
greeting();

// 빼기, 곱하기, 나누기 함수 만들어보기 (두개의 수)
function subtract(num01, num02) {
  return num01 + num02;
}
console.log(subtract);

function multiply(a, b) {
  return a * b;
  console.log("함수 종료");
}
console.log(multiply);

function divide(a, b) {
  return a / b;
  console.log("함수 종료");
}
console.log(divide);
// 세개의 수의 평균을 출력하는 함수 만들어보기 ->
function consoleAverage(a, b, c) {
  console.log((a + b + c) / 3);
}

consoleAverage(1, 2, 3);

function getTotal(a, b, c) {
  return a + b + c;
}

function getAverage(num, count) {
  return a + b + c;
}

console.log(divide(getTotal(3, 6, 9), 3));
// 첫번째 인자 getTotal(3,6,9) 두번째 인자 3
// (3+6+9) / 3
// consoleAverage(3, 6, 9);

//console.log(consoleAverage(1, 2, 3)); -> undefined 나옴
//함수의 실행값을 console 에 찍음 -> 실행 결과가 나옴.

//함수는 작은 단위로 쪼개서 사용하는 것이 좋다. 가독성의 측면
var total = getTotal(3, 6, 9);
var avg = divide(total, 3);
//

/*
기명함수(Name Function) - 함수 선언식 
    => 함수 호이스팅이 일어난다. => 함수 선언 이전에 호출해도 잘 작동한다. 구현부도 같이 호이스팅 된다.   
*/
func();
function func() {
  console.log("기명 함수입니다.");
}

/*
익명함수(Annoumous Function) - 함수 표현식 
    => 함수 호이스팅이 일어나지 않는다.  
    => JavaScript는 함수를 값으로 취급한다. => 값으로써 함수를 전달할 때는 익명함수를 사용하면 간결하게 작성할 수 있다. 
*/
//getData();
let getData = function fetchData() {
  console.log("익명함수입니다.");
};

// 식별자가 필요하다 => 함수 선언식 혹은 함수 표현식의 형태로 식별자를 써야 한다. 
// => 값으로 전달되는 경우에는 식별자가 필요없다.
//function (a,b) {
// return 
//}


// not a function
// 변수 호이스팅은 발생 (undefined) 근데 여기에 소괄호 붙이면 함수가 아.님 => not a function.
// 변수는 선언문만 끌어올림.

/*
fetchData();
변수의 이름으로 접근해야함 . 
*/

/*
    화살표 함수(Arrow Function) - ES6(2015)
        => function 키워드를 사용하지 않고 "=>" 를 통해서 간결하게 작성 가능하다.
        => 함수 표현식으로만 작성 가능하다. => 함수 호이스팅이 일어나지 않는다.
        => 중괄호와 return 키워드를 생략하면 표현식의 값을 return 한다. 
            => 기본적으로 {} 를 코드블록이라고 인식한다. 
            => 반환값이 객체라면 () 안에 {} 를 작성해야 return 생략이 가능하다. 
        => 다른 함수의 값으로 함수를 전달할 때 많이 사용한다. 
        => this 바인딩이 일어나지 않는다. (8_object 참조)
*/

let add = (a, b) => {
  return a + b;
};

let minus = (a, b) => a - b;

console.log("2 - 1 : ", minus(3, 2));

// 화살표 함수 이용해서 두 문자열을 연결하는 함수 만들어보기

let sumString = (str1, str2) => {
  return str1 + str2;
};

console.log(add("안녕하세요 ", "저는 현지희입니다."));
console.log(sumString("안녕하세요 ", "저는 현지희입니다."));

let getObj = (age, name) => ({
  age: age,
  name: name,
});

let user = getObj(24, "jeehee");
console.log(user);
// {} -> 코드블럭, 객체

let globalFunc = function () {
  console.log("외부 함수 실행");
  let inner = function () {
    console.log("내부 함수 실행");
  };
  inner();
  console.log("외부 함수 실행");
};

globalFunc();

//스택구조 FI (First In) LO (Last Out)

// ()를 생략하면 함수 그 자체를 가리킨다. => 함수를 값으로 사용할 떄는 호출이 아니라 식별자를 참조해야한다.
// (x) let copyFunc =foo();
function foo() {
  return "foo";
}

let copyFunc = foo;
console.log(copyFunc());

/* 
  콜백함수(Callback Function)
    => 함수의 값으로 전달되는 함수.
    => 함수에서 실행되어야하는 코드가 나중에 정해질 때 사용한다. 
    => 콜백함수로 익명함수를 많이 사용한다. 
    => 값으로 전달할 때는 호출이 아니라 함수 자체를 전달해야 한다. 
*/

function repeat(repeatCount, callback) {
  for(let i = 0; i < repeatCount; i++) {
    callback();                                    // 미리 작성할 코드를 작성하면 됨 (함수)
  }
}

/* 이름 없는 함수로 전달하는 경우 -

repeat(5, function() {
  console.log("코드실행!");
});

*/

// 값으로 전달하는 경우 
function print() {
  console.log("코드실행!");
} 

repeat(5, print);

