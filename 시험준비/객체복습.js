/*

[개념정리]

객체 (Object)

- key -value 형태로 여러 데이터를 저장할 수 있다.
- 여러 데이터를 합쳐서 고유한 정보를 나타내는 형태. 
- 객체에 없는 프로퍼티에 접근하면 undefined, undefined에 다른 키 값을 참조하려고 하면 발생.

메서드 (Method)

- 객체의 프로퍼티가 함수면 '메서드' 라고 부른다. 
- 호출방버비 객체 메서드() 의 형식으로 호출. 

this

- 함수 내부에 this 를 참조하면 함수를 호출한 객체를 가리킨다.
- 객체가 가지고 있는 고유의 정보를 이용하는 함수를 만들 수 있다.
- 즉, 같은 함수지만 호출하는 객체마다 결과가 달라진다.
- 메서드가 화살표 함수라면 this 바인딩이 되지 않아 호출한 객체를 가리키지 않는다.
- this를 통해 참조할 값이 있다면 화살표 함수를 사용하면 안된다. 함수에 this를 묶지 못하기 때문. 


*/

//user 변수, 나이, 이름 (성,이름) 선언 ㄱㄱ

let user = {
  age: 33,
  name: {
    firstName: "dongwoon",
    lastName: "son",
  },
};

// 객체의 프로퍼티 값 참조
console.log(user.name.firstName);

//객체의 프로퍼티 값 변경.
user.age = 34;
console.log(user.age);

//객체에 새로운 프로퍼티 생성
user.height = 181;
console.log(user);

//객체에 없는 프로퍼티 값 접근해보기
//console.log(user.address); -> undefined 라 출력된다옹

// 매서드 연습. dog 변수 선언, 나이 10살, 이름 코코, bow 함수 선언 -> 왈왈왈 출력

let dog = {
  age: 10,
  name: "coco",
  bow: function () {
    console.log("왈왈왈");
  },
};

dog.bow();

// user02 변수 , 나이, 이름 값 부여, introduce 함수 -> 함수 값 this 함수 사용해서 출력
let user02 = {
  name: "yoseop",
  age: 34,
  introduce: function () {
    console.log(`안녕하세요 ${this.age}세 하이라이트 ${this.name} 입니다. `);
  },
};

user02.introduce();

// this가 바인딩되는 대상을 바꿀 수 있다.
user02.introduce.call({ name: "gigwang" });

// triangle 객체에 너비와 높이를 프로퍼티로 지정, getAtrea 넓이를 출력하는 메서드 만들기. 높이 10, 가로 20
let triangle = {
  height: 10,
  width: 20,
  getArea: function () {
    console.log((this.height * this.width) / 2); // 값이 숫자니까 ' 안에 넣어줄 필요 ㄴㄴ //return  이랑 console 차이가 뭐여 -> return은 함수의 종료를 의미 이 뒤의 코드가 실행 되지 않음.
  },
};

triangle.getArea();
