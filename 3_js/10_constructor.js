/* 
    생성자(Constructor) 함수
        - 객체의 형태를 미리 작성하고 필요할 때 객체를 생성하는 함수.
            => 제품의 틀 역활. 
            => 생성자 함수를 통해서 생성된 객체를 인스턴스(Instance)라고함. => 메모리에 실재하는 데이터
        - this를 통해 프로퍼티 할당을 하면 함수가 생성자 함수로 바뀐다.
        - 인스턴스를 생성할 때는 new 키워드와 함께 생성자 함수를 실행하면 된다. 
        - prototype을 통해서 메서드나 프로퍼티를 상속할 수 있다. 
            => 인스턴스에는 없지만 상속받는 메서드 및 프로퍼티를 사용할 수 있다. 
            => 메모리를 낭비하지 않는다. 
            => 인스턴스를 통해서만 부를 수 있다.
        - 생성자를 통해서 실행하는 메서드는 정적 메서드(Static Method)라고 한다.   
*/

//생성자 함수 -> this.~ 라고 하면 자동으로
//new 키워드 붙이기 -> 인스턴스 생성.

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.introduce = function () {
  console.log(`안녕하세요 저는 ${this.age}세 ${this.name}라고 합니다.`);
};

// 이 자체로는 아직 아무것도 없는 상태

let user = new User("jeehee", 24);
let user03 = new User("dongwoon", 32);

console.log(Array.isArray([]));

// 리터럴 방식
console.log(user);
console.log(user03);
user.introduce();

/* 이 경우에는 생산자 함수가 아님.. 
function User(name, age) {
    return {
    name: name,
    age: age,
    introduce: function () {
        console.log(`안녕하세요 저는 ${this.name}입니다.`);
    },
  };
}
*/

let user01 = {
  name: "jeehee",
  age: 24,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user01.introduce();

let user02 = {
  name: "dongwoon",
  age: 32,
  introduce: function () {
    console.log(`안녕하세요 저는 ${this.name}입니다.`);
  },
};

user02.introduce();

/* 
    클래스(class)
        -생성자 함수와 동일한 역할을 한다. 
            => 결국은 프로토타입기반으로 동작한다. 
            => 그냥 문법적으로 클래스 기반 언어처럼 사용할 수 있게 해주는 것이다.
            => 문법적 설탕(Syntax Sugar)(겉보기에 편하게 만들었다는 뜻)
        - constructor를 통해서 초기화를 진행할 수 있다.
            => 전달해야하는 초기값을 constructor의 매개 변수로 전달받을 수 있다. 
            => 초기화할 값이 '없다면' 생략할 수 있다. 
        - new 없이 호출하면 오류가 발생한다. 
        - extends 를 통해 클래스를 상속 받을 수 있다. 
            => 상속하는 클래스를 슈퍼 클래스, 상속받는 클래스를 서브 클래스라고 한다. 
        -서브(하위)클래스에 추가적으로 초기화할 값이 있다면 먼저 super(상위 클래스의 constructor)를 호출해야한다.
            => super를 통해 상위클래스의 초기화값을 전달하고 추가적으로 값을 초기화하면 된다. 
*/
class Animal {
  constructor(legs) {
    this.legs = legs; // this 는 인스턴스, 이따가 실행받을 legs 를 받는 것.
  }
}

class Dog extends Animal {
  constructor(color) {
    super(4); // 상위클래스의 constructor 를 의미 legs -> class Animal 의 Constructor를 의미
    this.color = color;
  }

  // 인스턴스 메서드 => 무조건 함축표현으로 작성해야한다.
  bow() {
    console.log("멍멍!", this.color);
  }

  // 정적 메서드 => 메서드 앞에 static 키워드를 붙인다.
  static isDog(obj) {
    // instanceof : 특정 생성자의 인스턴스가 맞는지 true, false를 반환한다.
    console.log(obj instanceof Dog); // 피연산자가 두개들어가야함. 전달된 객체가 도그의 인스턴스오브가 맞냐?
  }
}

let animal = new Animal(4);
let dog = new Dog("black");
dog.bow();
Dog.isDog(dog);

//Animal을 상속받는 Cat 클래스 만들어보기
//species (고양이 종류) 속성 추가
// meow 함수 (인스턴스 메서드) => 고양이 울음 소리 내는 메서드

class Cat extends Animal {
  constructor(species) {
    super(4);
    this.species = species;
  }
  meow() {
    console.log("야옹~");
  }
}

let cat = new Cat("Korean Short hair");
console.log(cat);
cat.meow();
