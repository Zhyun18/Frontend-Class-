/*

[개념복습]

배열(Array)

- 배열 리터럴 방식으로 가장 많이 사용한다.
- 배열의 총 크기: 배열의 길이
- 배열에 들어있는 요소의 개수와 배열의 길이는 항상 일치하지는 않는다.
- 배열.length 프로퍼티를 통해 배열의 길이를 알 수 있다.
- 인덱스는 배열의 시작점부터 떨어진 거리. 

Array.prototype.push
- 배열의 마지막에 한개 이상의 요소를 추가하고 배열의 길이를 반환한다.
- 배열의 길이를 변화시키기 때문에 주의해야함. 반복문 사용시 유의.

Array.prototype.pop 
- 배열의 마지막 요소를 제거한다. 
- 제거된 요소를 반환한다. 

Array.prototype.unshift
- 배열의 가장 앞에 한개 "이상"의 요소를 추가한다.
- 변화된 배열의 길이를 반환한다. 

Arrya.prototype.shift
- 배열의 가장 앞의 요소를 제거하고 그 요소를 반환한다.
- 배열의 길이를 반환한다.

Array.prototype.slice 
- 지정한 시작점부터 끝점까지의 요소를 복사해서 배열로 반환한다. 
- 원본 배열을 변경하지 않는다. 
- 첫번째 인자: 시작 인덱스, undefined의 경우 0으로 지정.
- 두번쨰 인자: 종료 인덱스, undefined의 경우 끝까지 복사한다. 종료 인덱스 요소는 포함하지 않음. 

Array.prototype.splice 
- 배열의 중간에 요소를 제거하거나 추가할 수 있다. 
- 원복 배열 변경이 가능함.
- 첫번째 인자 : 시작 인덱스
- 두번쨰 인자 : 삭제할 개수
- 제거한 요소들을 배열로 반환한다. 
- 중간의 요소들을 제거할 때 사용. 
- 복사만 하는 것이 아니라 아예 옮길 때 사용. 

Array.prototype.indexof
- 인자로 전달된 값의 인덱스값을 반환
- 찾는 요소가 없는 경우 -1을 반환
- 찾는 요소가 없는 경우에 대한 분기처리를 할 수 있따. 

Array.prototype.includes
- 배열에 원소가 있는지 true, false 로 반환한다.
- 나중에 추가된 메서드
- 요소가 있는 지 없는 지 확인할 때는 includes, 인덱스를 확인할 떄는 indexof

배열의 고차함수(Higer Order Function)
- 고차함수란 함수로 인자를 전달받거나 함수를 반환하는 함수. 

Array.prototype.forEach
- 배열의 각 요소를 순회하면서 콜백함수의 인자로 전달해서 실행.
- 각 요소를 참조하여 함수를 실행할 수 있다.
- 콜백 함수의 첫번째 인자로 각 요소가 한번씩 전달.
- 두번쨰 인자로 각 요소의 인덱스 값이 전달.

Array,prototype.filter
- 기본적으로 forEach와 사용법이 비슷하다.
- callback 함수의 return 값이 true 인 요소만 모아서 새로운 배열로 반환.
- return 값이 true 나 false 로 반환되어야 한다.
- 반환값(boolean)에 따라 false 요소는 걸러진다.
- 원본 배열이 변경이 안된다. 

Arrray.protype.map
- forEach와 사용법이 비슷
- 각 요소에 변형을 줄 때 사용
- return 값을 모은 배열을 새로 반환
- 각 요소에 연산을 해서 새로운 값을 만들어서 새로운 배열로 만든다.
- 원본 배열을 변경하지 않는다. 

*/

let numbers = [1, 2, 3, 4];
console.log(numbers.length);

console.log(numbers[0]); // 배열의 첫번쨰 인자 -> 1 출력됨. 0부터 시작.
console.log(numbers[10 - 9]); // 배열의 두번째 인자 -> 2 출력됨.

let idx = 1 + 2;
// 배열 요소의 값 변경
numbers[idx] = 10; // numbers[idx] -> numbers[3] => 4 인데 이를 10으로 변경.
console.log(numbers); // [1, 2, 3, 10]; 객체는 프로퍼티를 갖고 있음. 따로 선언한적이 없어도 자.동.완.성

//배열의 메서드
let numbersLength = numbers.push(0, 13, 41, 23);
console.log(numbers, numbersLength);
//[1, 2, 3, 10] 에 numbers.push 할당해서 [1, 2, 3, 10, 0, 13, 41, 23] 이 됨. 배열의요소/ 배열의 길이가 다 증가.

let removedNum = numbers.pop();
console.log(numbers, removedNum);
// [1, 2, 3, 10, 10, 13, 41, 23, 8] 에서 8 이 삭제되어 출력! (배열의 마지막 요소를 제거.)

// (문제 1.) 배열의 모든 요소를 제거해보기. 배열의 모든 요소가 사라질떄까지 "반.복"
// 반복실행될 코드는 numbers.pop

numbersLength = numbers.length; // 변수 선언 이유? : 변수의 총길이를 모르는 경우 변수로 뚝딱 (for 문에 numbersLength 대신 7 넣어도 됨.)
for (let i = 0; i < numbersLength; i++) {
  numbers.pop();
}
console.log(numbers);

// 과일 예제
let fruits = ["banana", "orange", "apple"];
let fruitsLength = fruits.unshift("garpe", "peach"); //unshift 배열의 가장 앞에 한개 이상의 요소 추가
console.log(fruits, fruitsLength);

let copyFruits = fruits.slice(0, 2); // slice 원본 배열 변경없이 지정한 시작점부터 끝점까지 복붙  -> 첫번째 인자 ~ 세번쨰 인자/ 단 종료 인덱스는 포함 x
console.log(copyFruits, fruits); // 출력값 : ["grape, "[peach"],[원래배열s]

// 색깔 예제
let colors = ["red", "blue", "white", "green"];
let removedColors = colors.splice(1, 2, "black", "yellow"); //splice, 시작인덱스/ 삭제할개수/ 배열의 요소를 제거 혹은 추가
console.log(colors, removedColors); // 출력시 [레드,블랙,옐로, 그린] [블루,화이트]

let idx02 = colors.indexOf("blue"); // indexof : 인자로 전달된 값의 인덱스 값을 반환
console.log(idx02); // blue는 이미 colors 의 배열에서 제거되었으므로 -1 이 출력.

let idx03 = colors.indexOf("black");
console.log(idx03); // 1

// (문제 2.) 문제 colors에서 tomato 를 찾아보고 없으면 찾는 색상이 없습니다 문구 출력 // "black" else문 -> ~번쨰 있습니다. 출력
let idx04 = colors.indexOf("black"); //새 변수를 설정안함.
if (idx04 === -1) {
  console.log("찾는 색상이 없습니다.");
} else {
  console.log(`${idx04 + 1}번째에 있습니다.`);
}
//

let isInclude = colors.includes("black"); //includes 배열에 원소가 있는지 확인.
if (isInclude) {
  console.log("찾는 색상이 없습니다.");
}

// arr의 각 요소에 * 2 하여 "출력"하기
let arr = [1, 2, 3, 4];
for (i = 0; i < 4; i++) {
  console.log([i] * 2);
}

/* 시험문제 -1 */

// foreach : 배열의 각 요소를 순회하면서 콜백함수의 인자로 전달하여 실행.

let colorArr = ["red", "blue", "yellow"];
colorArr.forEach(function (item, idx) {
  if (idx % 2 === 0) console.log(item, idx); // 짝수번째 인자만 출력하기 item -인자 idx- 순서s
}); // 출력값 red 0. yellow 2

/*
연습: let colorArr = ["red", "blue", "yellow"]; 이 중에서 짝수번째 인자만 출력.
color.forEach(function(item, idx) {
  if(idx % 2 === 0) console.log(items, idx);
});

*/

// filter : callback 함수의 return 값이 true 인 요소만 모아서 새로운 배열로 반환.

let numList = [10, 13, 20, 30, 51];
let result = numList.filter((num) => num % 2 === 0); // 화살표 함수
let result02 = numList.fliter(function (num) {
  return num % 2 === 0;
}); // 기본방법

console.log(result, numList); // 출력값 [10, 20, 30] [10,13,20,30,51]

/*
filter연습, 두번째 인자만 출력하기
let numList = [10, 13, 20, 30, 51];
let result = numList.filter((num) => num % 2 === 0);
*/

/*
let result = numList.fliter(function(num) {
  return num % 2 ===0;
});
*/

// protype.map: 각 요소에 변형을 줄때, return 값을 모은 배열을 새로 반환.
let doubleList = numList.map(function (num) {
  return num * 2;
});

let doubleList02 = numList.map((num) => num * 2);
console.log(doubleList02, numList); // return 값이 각 인자에 2 곱해서 ㅇㅇ

/*
protype.map ->  각 배열의 요소에 * 2
let doubleList = numList.map(function(num) {
  return num * 2;
})

let doubleList = numList.map((num) => num * 2);
console.log(doubleList, numList);

/* 

[시험문제 개념]

배열의 고차함수(Higer Order Function)
- 고차함수란 함수로 인자를 전달받거나 함수를 반환하는 함수. 

Array.prototype.forEach
- 배열의 각 요소를 순회하면서 콜백함수의 인자로 전달해서 실행.
- 각 요소를 참조하여 함수를 실행할 수 있다.
- 콜백 함수의 첫번째 인자로 각 요소가 한번씩 전달.
- 두번쨰 인자로 각 요소의 인덱스 값이 전달.

Array,prototype.filter
- 기본적으로 forEach와 사용법이 비슷하다.
- callback 함수의 return 값이 true 인 요소만 모아서 새로운 배열로 반환.
- return 값이 true 나 false 로 반환되어야 한다.
- 반환값(boolean)에 따라 false 요소는 걸러진다.
- 원본 배열이 변경이 안된다. 

Arrray.protype.map
- forEach와 사용법이 비슷
- 각 요소에 변형을 줄 때 사용
- return 값을 모은 배열을 새로 반환
- 각 요소에 연산을 해서 새로운 값을 만들어서 새로운 배열로 만든다.
- 원본 배열을 변경하지 않는다. 
*/
