/* 
    조건문(Conditional Statement)
        -조건에 따라서 실행할 코드를 선택한다. => 조건에 따라 프로그램을 제어한다. 
*/

{
  //코드 블록은 {} 안의 코드를 하나의 실행 단위로 작성한다. =?> 제어문이나 함수의 구현 부분을 작성한다.
  console.log("코드 블록 실행");
  console.log("코드 블록은 여러 코드를 실행하는 하나의 뭉치다.");
}

/* 
    if 문 
        - () 안의 조건식이 true 라면 코드 블록을 실행하고, false 라면 실행하지 않는다. 
        - 조건식과 코드 블록 중 하나라도 작성하지 않으면 오류가 발생한다. 
        - 실행할 코드가 한줄이라면 {} 생략이 가능하다. 

*/
var num = 1;
if (num > 0) {
  console.log("num 은 양수입니다.");
}
if (num < 0) {
  console.log("num 은 음수입니다.");
}

/* 
    if~else 문
        - 조건식이 true 라면 if 문의 코드를 실행하고, fasle 라면 else 문의 코드 블록을 실행한다. 
        - 조건에 부합하는지 안하는지 2가지 경우에 대해서 작성한다. 
        
*/
var age = 25;
if (age >= 30 && age < 40) {
  console.log("30대입니다.");
} else {
  console.log("30대가 아닙니다.");
}

/* 
     else if 
        - 앞의 if문의 조건식 false 인 경우 else if 의 조건에 해당하는 지 확인 후, true 라면 실행, false 라면 실행하지 않는다. 
        - else if문은 몇개든지 더 붙일 수 있다. 
        - 앞에서 else if 문을 사용했다면 else 문은 무조건 마지막에 와야한다. 
*/
var num02 = 0;
if (num02 > 0) {
  console.log("num02는 양수입니다.");
} else if (num02 < 0) {
  console.log("num02는 음수입니다.");
} else {
  console.log("num02는 0입니다.");
}

// 문제 1. 변수 num03 의 값이 짝수인지 혹수인지 출력해 보기.
var num03 = 105;
if (num03 % 2 === 0) {
  console.log("num03은 짝수입니다. ");
} else {
  console.log("num0은 홀수입니다. ");
}

// 나머지를 구하는 연산자 '%'
// 동등 연산자 '==' 암묵적인 형 변환. console.log("1"/1) -> console.log(1/1) -> 1 데이터 타입을 변환
// "1" == 1 -> 1 == 1
//  1 == true

/// 일치 연산자 '===' 암묵적 형변환 (데이터 타입 변환)을 하지 않는다. console.log("1"/1) -> false.
//  1 === true -> false

// 문제 2. 변수 num03의 값이 5의 배수이면서 100 보다 크면 num03의 값을 출력해보기
if (num03 % 5 === 0 && num03 > 100) {
  console.log(num03);
}

if (num03 % 5 === 0) {
  if (num03 > 100) {
    console.log(num03);
  }
}

//if 문의 중첩 => 분기처리를 더 구체적으로 해야할 때 사용한다.

// 문제 3. 변수 data의 데이터의타입이 문자열이라면 문자열입니다. 숫자라면 숫자형입니다. 둘다 아니면 문자열도 숫자형도 아닙니다. 출력하기
if (typeof num03 === "string") {
  console.log("문자열입니다.");
} else if (typeof num03 === "number") {
  console.log("숫자입니다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}

var data = "안녕하세요";
if (typeof data === "string") {
  console.log("문자열입니다.");
} else if (typeof data === "number") {
  console.log("숫자열입니다");
} else {
  console.log("문자열도 숫자열도 아니다. ");
}

/* 
    switch
        -() 안의 값(표현식)으로 각 case문의 값과 비교해서 해당하는 케이스를 실행한다.
        -해당하는 case 문에 도달하면 이후의 모든 case 문을 실행한다. 
            => break 문을 사용하면 이후의 case 를 실행하지 않고  switch "탈출"한다.
        -default문은 기본으로 실행되는 문이다. 
*/

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

// 문제 4.  문제3을 switch 문으로 바꿔보기

var data2 = 100;
switch (typeof data2) {
  case "string":
    console.log("문자열입니다.");
    break;
  case "number":
    console.log("숫자형입니다.");
    break;
  default:
    console.log("문자열도 숫자형도 아닙니다.");
}

// switch (data2) -> switch (100)이 들어가는 것임. case (100): 이렇게 비교해야하는 것임 (x)
// switch (typeof data2) -> typeof data2 의 값 => 즉 string/number
// switch (값) -> 값을 넣는 거임. switch (데이터 반환 값) -> 에 따른 케이스 분류.....

// 문제 5. 연령대 판독기를 완벽하게 만들기 (30~39)
// parseInt() 실수를 적으면 정수로 바꿔준다 (내림)
// Math.floor 는 소수점 이하의 숫자를 내림한다.
// switch (Math.floor(age02 / 10 ))
switch (parseInt(age02 / 10)) {
  case 3:
    console.log("30대입니다.");
    break;
  case 4:
    console.log("40대입니다.");
    break;
}

// 문제 5. score 변수의 값에 따라서 grade 변수의 값을 변경
// 90점 이상 A, 80~89 : B, 70~79 : C , 60~69 : D , 그 외에는 F
var score = 90;
var grade;

switch (Math.floor(score / 10)) {
  case 10:
  //grade ="A"
  //break;
  //할 필요가 없음 -> 밑의 break 를 통해 케이스를 묶을 수 있다.
  //여러 case 를 묶을 때 break문을 생략하여 작성.
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(grade);
