/* 
    배열(Array)
        -배열 리터럴 방식으로 가장 많이 사용한다. 
        -배열의 총 크기를 배열의 길이라고 한다. 
            => 배열에 들어있는 요소의 개수와 배열의 길이는 항상 일치하지는 않는다. 
            => 배열.length 프로퍼티를 통해 배열의 길이를 알 수 있다. 
        -인덱스는 배열의 시작점으로부터 떨어진 거리. 
*/
let numbers = [1, 2, 3, 4];
console.log(numbers.length);

console.log(numbers[0]);
console.log(numbers[10 - 9]); //인덱스에는 숫자로 평가되는 표현식은 모두 가능하다.  (식같은 것도 넣을 수 있다는 뜻.)

let idx = 1 + 2;
// 배열 요소의 값 변경
numbers[idx] = 10;
console.log(numbers);

// 객체는 프로퍼티를 갖고 있다. 따로 선언한 적이 없는데 값이 자동 완성.

// 배열의 메서드

// Array.prototype.push : 배열의 마지막에 한개 이상의 요소를 추가하고, 배열의 길이를 반환한다.
// => 배열의 길이를 변화시키기 때문에 주의해야함. 특히 반복문의 조건으로 사용할 때.
let numbersLength = numbers.push(0, 13, 41, 23);
console.log(numbers, numbersLength);

// Array.prototype.pop : 배열의 마지막 요소를 제거한다. 제거된 요소를 반환한다.
let removedNum = numbers.pop();
console.log(numbers, removedNum);

// 문제. 배열의 모든 요소를 제거해보기. => 배열의 모든 요소가 사라질 때 까지 반복  (배열의 개수를 모를 때는 어떻게 할 수 있을지...)
// Q: 반복문이라면 for ? while ? / 반복 실행되어야 하는 코드는 numbers.pop()
// 반복문 사용할 때는 어떤 반복 쓸지... => 반복횟수가 명확한가 아닌가
// 반복문 명확... for
numbersLength = numbers.length;
for (let i = 0; i < numbersLength; i++) {
  numbers.pop();
}
console.log(numbers);

// Arrray.prototype.unshift : 배열의 가장 앞에 한개 이상의 요소를 추가한다. 변화된 배열의 길이를 반환한다.
let fruits = ["banana", "orange", "apple"];
let fruitsLength = fruits.unshift("grape", "peach");
console.log(fruits, fruitsLength);

//Array.prototype.shift : 배열의 가장 앞의 요소를 제거하고, 그 요소를 반환한다. 배열의 길이가 변화한다.
let removedFruit = fruits.shift();
console.log(fruits, removedFruit);

//Array.prototype.slice : 지정한 시작점부터 끝점까지의 요소를 복사해서 배열로 반환한다. 원본 배열을 변경하지 않는다.
// 첫번째 인자 : 시작 인덱스. undefined의 경우 0으로 지정된다.
// 두번째 인자 : 종료 인덱스. undefined의 경우 끝까지 복사한다. 종료 인덱스 요소는 포함되지 않는다.
let copyFruits = fruits.slice(0, 2); // 0부터 시작해서 2번째 전까지 -> peach, banana 출력됨
console.log(copyFruits, fruits);

/* 
    Array.prototype.splice : 배열의 중간에 요소를 제거하거나 추가할 수 있다.. 즉 원복배열 변경이 된다. 
        => 첫번째 인자 : 시작 인덱스.
        => 두번째 인자 : 삭제할 개수. 
        => 제거한 요소들을 배열로 반환한다. (잘라넣기의 효과)
        => 중간의 요소들을 제거할 때 사용한다. 혹은 복사만 하는게 아니라 아예 옮길 때 사용한다.  
*/
let colors = ["red", "blue", "white", "green"];
let removedColors = colors.splice(1, 2, "black", "yellow");

console.log(colors, removedColors);

/* 
    Array.prototype.indexOf : 인자로 전달된 값의 인덱스값을 반환 
        => 찾는 요소가 없는 경우 -1을 반환한다. => 찾는 요소가 없는 경우에 대한 분기처리를 할 수 있다. 
*/

let idx02 = colors.indexOf("blue");
console.log(idx02);

let idx03 = colors.indexOf("black");
console.log(idx03);

// 문제 colors에서 tomato 찾아보고 없으면 "찾는 색상이 없습니다" 라는 문구 출력하기
// ~라면 -> 조건문 사용

let idx04 = colors.indexOf("tomato"); //black 넣어서 else문 확인하기
if (idx04 === -1) {
  console.log("찾는 색상이 없습니다.");
} else {
  console.log(`${inx04 + 1}번째에 있습니다.`);
}

/* 
    Array.prototype.includes : 배열에 원소가 있는지 true, false 반환한다.
    => 나중에 추가된 메서드다.
    => 요소가 있는지 없는지 확인할 때는 includes를, 인덱스를 확인할 때는 indexOf
*/
let isInclude = colors.includes("black");
if (!isInclude) {
  console.log("찾는 색상이 없습니다.");
}

/* 
    배열의 고차함수 (Higher Order Function) 
        - 고차함수란 함수로 인자로 전달받거나 함수를 반환하는 함수.
*/

let arr = [1, 2, 3, 4];

// arr의 각 요소에 * 2하여 출력하기

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
}

/* 
    Array.prototype.forEach
        => 배열의 각 요소를 순회하면서 콜백함수의 인자로 전달해서 실행한다.
        => 각 요소를 참조하여 함수를 실행할 수 있다. 
        => 콜백함수의 첫번째 인자로 각 요소가 한번씩 전달된다.
        => 두번째 인자로 각 요소의 인덱스 값이 전달된다. 
*/
let colorArr = ["red", "blue", "yellow"];
colorArr.forEach(function (item, idx) {
  // 짝수번째만 출력하기
  // 어떨때만 하고 어떨때만 아닌 것 => if 조건문 실행
  if (idx % 2 === 0) console.log(item, idx);
});

/* 
    Array.prototype.filter
        => 기본적으로 forEach 와 사용법이 비슷하다. 
        => callback 함수의 return 값이 true 인 요소만 모아서 새로운 배열로 반환한다.
            => return  값이 true 나 false 가 반환돼야한다.
        => 반환값(boolean)에 따라 false인 요소는 걸러진다. 
        => 원본배열이 변경이 안된다. 
*/






let numList = [10,13,20,30,51];
let result = numList.filter((num) => num % 2 ===0 );
    //true 나 false 값이 나오는 것 - 조건문
/* 
    (원래 버전)
   
    let result = numList.fliter(function (num){
    return num % 2 === 0;
    })

*/

console.log(result, numList);

/* 
    Array.protype.map
        => forEach와 사용법이 비슷하다. 
        => 각 요소에 변형을 줄 떄 사용한다.
            => return 값을 모은 배열을 새로 반환한다. 
            => 각 요소에 연산을 해서 새로운 값을 만들어서 새로운 배열로 만든다. 
        => 원본 배열을 변경하지 않는다.*
*/

let doubleList = numList.map(function(num){
    return num * 2;
});
// 화살표함수로 구현해보기
let doubleList02 = numList.map((num) => num * 2);

console.log(doubleList02, numList);
