/* 

 [개념]

 for문 

 - ()안의 족선이 false가 될 때까지 반복 실행.
 - (초기값 변수; 조건식; 증감식) 순으로 작성.
 - 코드 블록 실행 후 증감식을 통해 값을 변화시켜 종료시점을 정할 수 있다. -> 즉, 반복횟수가 정해져 있으면 for 문을 사용하면 된다.
   그러므로, 조건식과 증감식을 제대로 작성해야함 
 - 보통 초기값을 0 부터 시작. 
 - 배열의 인덱스가 0부터 시작하기 때문에 배열의 모든 요소에 접근하기가 쉽다. 
 - 배열의 마지막 인덱스는 배열.length-1 과 동일.
 - 0부터 시작해서 배열의 길이보다 적을 때 (0 < 배열.length) 라고 조건을 작성하면 배열의 모든 요소를 참조할 수 있다. 
 - *** for 문은 반복횟수가 명확할 떄 사용. 
 - 통념상 구조: for (var i =1; i < 5; i++){}


 while 문

 - 초기값이 없고* (따로 선언해야함.) {} 안에 조건식만 적는다.
 - 조건식이 true 라면 실행, 조건식이 false 가 될 때까지 무한 반복을 한다.
 - 외부에다가 값을 선언하고 while 문 내부에서 값을 변화시켜 종료시점을 정함.
 - break 문 사용시 while 문 탈출 -> 조건식과 함께 사용하여 특정 조건에서 탈출함. 
 - break 문을 만나는 즉시 탈출.
 - break 시점따라 실행되는 양상이 달라짐.
 - 외부에 boolean 변수를 선언해놓고, 특정 조건에서 false 로 만들어 while 문을 종료한다.
 - *** while 문은 반복횟수가 불분명할때 사용.
 - ex: 사용자가 특정 값을 입력할 때까지 무한반복. 
 - continue 는 반복을 아예 중단하지 않고 해당 회차만 건너뜀. 
*/

// for 예시 찍어보기
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// 0부터 시작해서, 5가되기 전까지 i를 1씩 증감시키는 것을 반복 : 0,1,2,3,4

// (문제 1.) numbers의 각 요소를 한번씩 출력하기.
// 요소: 배열에 있는 값 element

var numbers = [1, 10, 4, 5, 70, 10, 10];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//  var numbers : number[]

// [문제 2.] numbers 의 모든 숫자의 합을 result 변수에 담기.

var result = 0;
for (var i = 0; i < numbers.length; i++) {
  result = result + numbers[i];
}
console.log("result:", result);

// [문제 3.] 0~20 , 짝수만 출력.
/*
- 배열일 필요가 없다. 변수에 담을 필요도 없다.
- 초기값이 계속 변하는 점 이용.
- 2~40이 나오면 안됨. 짝수 일떄만 실행. 
*/

for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// for 문과 if 문은 중첩 가능합니다.

/*

다른방법 -> i가 2씩 증가하여 실행횟수가 반이 된다. 근데 왜 카운트 변수를 따로 지정한것임? 

var count02 = 0;
for (var i = 0; i <=20; i=i+2) {
    count02;;
    if {i % 2 === 0} console.log(i);
}
console.log("count02:", count02);

*/

// [문제 4.] 구구단 2단부터 9단
/*
-for문도 중첩 가능. 중첩 사용 시 초기값 변수의 이름이 달라야함.
-중첩시 증감식 실수 유의. 
-`${}`이용해서 다시 해보기. 
*/

for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(`${i} * ${j}=`, i * j);
  }
}

// (while문) vaule = 10, active = true, 14 일떄 건너뛰고, 20일때 종료
var value = 10;
var active = true;
while (true) {
  value++;
  if (i === 14) continue;
  if (i === 20) break;
  console.log("value:", value);
}

// num = 2 의 몇 제곱이 1000000 보다 큰지 while 문을 활용하여 알아내기.
// 변수 설정: squarecount = 0;

var num = 2;
var num02 = num;
var squareCount = 0;

while (true) {
  if (num * num02 > 1000000) break;
  num = num * num02;
  squareCount++;
  console.log(num);
}
console.log(squareCount);

// 실행이 안됨.. ㅅㅂ

// (문제 5.) while 문을 이용해서 num03 이 0 부터 시작해서 20 까지 홀수만 출력하기, continue 사용하기.
var num03 = 0;
while (true) {
  num03++;
  if (num03 % 2 === 0) continue;
  if (num03 > 20) break;
  console.log(num03);
}
