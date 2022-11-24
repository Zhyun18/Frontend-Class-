/* 
    for 문
        - ()안의 조건이 false 가 될때까지 반복 실행한다. 
        - (초기값 변수; 조건식; 증감식) 순으로 작성한다. 
        - 코드블록 실행 후 증감식을 통해 값을 변화시켜 종료시점을 정할 수 있다. 
            => 조건식과 증감식을 제대로 작성하지 않으면 무한루프에 빠진다. 
        - 보통 초기값을 0부터 시작한다.
            => 배열의 인덱스가 0부터 시작하기 때문에 배열의 모든 요소에 접근하기가 쉽다. 
            => 배열의 마지막 인덱스는 배열.legnth -1 가 동일하다.
            => 0부터 시작해서 배열의 길이보다 작을 때 (0 < 배열.length) 라고 조건을 작성하면 배열의 모든 요소를 참조할 수 있다. 
        - for 문은 반복횟수가 명확할 때 사용한다. 
*/
/* for (var i = 1; i <= 5; i++) {
  console.log(i);
}
 */
for (var i = 0; i < 5; i++) {
  console.log(i);
}
// 0부터 시작 -> =포함 (x) 1부터 시작 -> = 포함

// 문제 1. numbers 의 각 요소를 (배열에 있는 값 element 를 요소라 칭함) 한번 씩 출력하기.
var numbers = [1, 10, 4, 5, 70, 10, 10];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// 초기값 조건 증감식/ 매번 선언 하는 것.
// 코드 문 내에서 유효한 초기값 조건 선언.
// 문제 2. numbers의 모든 숫자의 합을 result 변수에 담기
var result = 0;
for (var i = 0; i < numbers.length; i++) {
  result = result + numbers[i];
}

console.log("result:", result);
// numbers length -> 코드의 길이만큼 자동설정.

// 문제 3. 0~20 사이의 (20 포함) 짝수만 출력
// 1. 배열일 필요가 없다. 변수에 담을 필요도 없다.
// 2. 초기값이 계속 변하는 점을 이용하자.
// 3. 2~40이 나오면 안된다. => 짝수 일때만 실행이 되어야 함.
var count = 0;
for (var i = 0; i <= 20; i++) {
  count++;
  if (i % 2 === 0) console.log(i);
}
console.log("count :", count);

// 출력하는데 짝수만 출력하는 조건 -> 조건문 추가해서 출력하면 끝인 거였음. ...
// for 문과 if 문은 중첩 가능합니다.

/* for (var i =0; i <= 20, i+2 ) {
--> 2씩 증가하는 i 출력 (X)
} */

//--> i 가 2씩 증가하여 실행횟수가 반이 된다.
var count02 = 0;
for (var i = 0; i <= 20; i = i + 2) {
  count02++;
  console.log(i);
}
console.log("count02:", count02);

// 문제 4. 구구단 2단부터 9단
// => for 문도 중첩이 가능. 중첩 사용시 초기값 변수의 이름이 달라야한다.
// => 중첩할 떄 증감식을 많이 실수한다.
for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = `, i * j);
  }
}

// 밖에 있는 for 문
// 코드 안에 있는 문 이 끝나야 증감식으로 넘어감.
// for 문은 반복횟수를 정할 수 있음. 반복횟수가 명확할때 사용

/* 
  while 문 
    - 초기값이 없고 (따로 선언해야함. ) {} 안에 조건식만 적는다. 
    - 조건식이 true라면 실행, 조건식이 false 가 될때까지 무한 반복을 한다. 
    - 외부에다가 값을 선언하고 while 문 내부에서 값을 변화시켜 종료시점을 정한다. 
    - break 문 사용 시 while 문을 탈출한다. => 조건문과 함께 사용해 특정 조건에서 탈출한다. 
      => break 문을 만나는 즉시 탈출한다. 
      => break 시점따라 실행되는 양상이 달라진다. 
    - 외부에 boolean 변수를 선언해놓고 특정 조건에서 false 로 만들어 while 문을 종료한다. 
    - while문은 반복횟수가 불명활할 때 사용한다.
      => 예를 들어 사용자가 특정 값을 입력할 때까지 무한 반복. 
    - continue 는 반복을 아예 중단하지 않고 해당 회차만 '건너뛴다'. 
*/
var value = 10;
var active = true;
while (true) {
  value++;
  if (value === 14) continue;
  if (value === 20) break;
  console.log("value:", value);
}

// num 을 몇 제곱이 되어야 1000000 보다 큰 지 알 수 없다. => while 문 활용.
var num = 2;
var num02 = num;
var squareCount = 0;
while (true) {
  if (num * num02 > 100000) break;
  num = num * num02;
  squareCount++; // 몇 제곱인지 계속 카운트.
  console.log(num);
}
console.log(squareCount);

// 문제 5. while 문을 통해서 num03 이 0부터 시작해 20까지 홀수만 출력하기 =>: continue 사용하기.
var num03 = 0;
while (true) {
  num03++;
  if (num03 % 2 === 0) continue;
  if (num03 >= 20) break;
  console.log(num03);
}

/* 
  do ~ while 
    - 일단 한번은 실행한다. 
*/
var num04 = 0;
do {
  console.log(num04);
  num04++;
} while (false);
