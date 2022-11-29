/* 
    객체(Object)
        -key -value 형태로 여러 데이터를 저장할 수 있다. 
        -여러 데이터를 합쳐서 고유한 정보를 나타내는 형태.
*/
let user = {
  age: 33,
  name: {
    firstName: "son",
    lastName: "dongwoon",
  },
};

// 객체의 프로퍼티 값 참조
console.log(user.name.firstName);

// 객체의 프로퍼티 값 변경
user.age = 33;
console.log(user.age);

// 객체에 새로운 프로퍼티 생성
user.height = 181;
console.log(user);

// 객체에 없는 프로퍼티에 접근하면 undefined. undefined에 다른 키값을 참조하려고 하면 오류 발생.
//console.log(user.address.city);

/* 
    매서드(Method) : 객체의 프로퍼티가 함수라면 매서드라고 부른다. 
    => 호출방법: 객체.메서드() 의 형식으로 호출. 
*/

let dog = {
  age: 10,
  name: "coco",
  bow: function () {
    console.log("왈왈왈!");
  },
};
dog.bow();

/* 
    this 
        -함수 내부에서 this 를 참조하면 함수를 호출한 객체를 가리킨다. => bow함수에서 this 를 참조하면 dog를 가리킨다. 
        -객체가 가ㅣㅈ고 있는 고유의 정보를 이용하는 함수를 만들 수 있다.
            => 즉, 같은 함수이지만 호출하는 객체마다 결과가 달라진다. 
        - 메서드가 화살표 함수라면 this 바인딩이 안돼서 호출한 객체를 가리키지 않는다. 
            => this 를 통해 참조할 값이 있다면 화살표 함수를 사용하면 안된다. (함수에 this 묶지 못한다. )
*/

let user02 = {
  age: 30,
  name: "seok",
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  },
};

//this가 바인딩 되는 대상을 바꿀 수 있다.
user02.introduce.call({ name: "hwangbo" });

user02.introduce();

// triangle 객체에 너비와 높이를 프로퍼티로 지정하고, getArea 넓이를 출력하는 메서드 만들기.

let triangle = {
  height: 10,
  width: 20,
  //    객체 메서드 함축 표현 => function 키워드 제외.
  getArea: function () {
    console.log((this.width * this.height) / 2);
  },
};

triangle.getArea();
