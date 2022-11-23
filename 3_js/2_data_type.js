/* 
    여러줄 
    주석 
    => Alt +Shift + A
*/

/* 표현식 : 값으로 평가되어 새로운 값을 생성
        => 값으로 평가되는 모든 것이 '식' */

// ctrl shift 로 해당 영역 선택

var num = 1 + 3;
console.log(num);

//문 : 프로그램을 구성하는 최소 단위. 식은 문에 포함.
var x; // 변수 선언 문. 값으로 평가 될 수 없기 때문에 식이 아닌 문.

/* console.log(var x); var x 는 값으로 평가 될 수 없기 때문에 식이 아니다. */

// 자료형 : 프로그램이 처리할 수 있는 자료의 형태. => 같은 데이터 (숫자)라도 자료형에 따라 컴퓨터의 해석이 달라진다.
// => typeof 연산자를 통해 자료형을 확인해 볼 수 있다.

//console.log(97)

// 1. 숫자형(number) : 숫자를 나타내는 데이터.
var year = 2022;
console.log(typeof year);
var lastYear = 2022 - 1;
console.log(lastYear);
console.log(0.1 + 0.2); // 정밀한 수학 계산에는 JS 는 적합하지 않다.

/* 
    2. 문자열(string) : 문자를 나타내는 데이터.
        => JS에서는 문자와 문자열의 구분을 두지 않는다.
        => 나타내고자 하는 문자를 "" 혹은 ''사이에 작성한다. 
            -> 문자열 안에 ""를 포함시키려면 ''안에 포함시키면 된다. => 기호가 아니라 문자열 "" 로 인식한다. 
            => 문자열 안의 숫자와 숫자형 데이터는 다른 개념이다.
            => 문자열과 숫자형을 더해도 오류가 발생하지 않는다. 
*/

var firstName = "jeehee";
var yearStr = "2022'";
console.log(typeof yearStr);
console.log(1 + "한글");

/*  
    3. 논리형(boolean) : 참과 거짓으로 논리를 표현하는 자료형. => true, false => 조건문에 사용.
        => true 는 1, false 는 0이다.
*/

var isTrue = true;
var isBig = 1 > 2; //비교연산자를 통해 false 값 반환. 조건식이라고 한다.
console.log(isBig);

/* 
    4. undefined 와 null
        -undefined: 값이 정의되지 않은 상태를 나타내는 데이터. => 참조했더니 값이 할당된 적이 없다.   
        -null: 값이 유효하지 않는 상태를 '명시적으로' 나타내는 데이터. => 개발자가 의도적으로 null을 할당시킨다. 
        -undefined 와 null 모두 false 처럼 취급된다. => falsy한 값이라고 표현한다.  
*/

var data;
console.log(data); //선언만 했기 때문에 undefined로 초기화.
data = null; //개발자가 의도적으로 값이 유효하지 않다고 명시.
if (data === null) {
  console.log("유효하지 않는 값");
}

/* 
    5. 배열 (array) : 여러개의 데이터를 저장할 수 있는 자료형. 
        -[값1, 값2]의 형태로 여러개의 값을 []안에 나열하여 작성한다.
        -순서(인덱스)로 데이터에 접근 => 순서가 0부ㅜ터 시작한다. 즉, 0번째가 첫번째 데이터를 가리킨다. 
        -배열(인덱스)로 값을 참조한다. 
            => []안에 숫자로 평가되는 표현식 사용 가능
        -배열의 길이란 배열의 총 크기를 의미한다.
            => 특별한 경우가 아니라면 배열의 길이 -1 이 마지막 인덱스를 가리킨다.
        -JS의 배열은 다른 자료형의 데이터를 함께 저장할 수 있다. 
*/

var arr = [2, 4, 5];
console.log(arr[arr.length - 1]);

/* 
    6.객체(Object) : 여러개의 데이터를 저장.
        - {} 안에 key(속성명) - value(속성값) 쌍으로 값을 저장한다.  => 프로퍼티라고 부른다. 
            => 프로퍼티의 값이 함수면 메서드라고 부른다. 
        - 값을 참조하는 방법
            1) 객체, 속성명
            2) 객체, ["속성명"] => 동적 접근 가능. =>  []안에 값으로 평가되는 표현식 올 수 있다. 
        -객체에 없는 프로퍼티를 참조하면 undefined를 반환한다.
        -객체, 속석명 = 값의 형태로 할당 가능하다.
         => 개게에 없는 속성이면 속성을 만든다.
*/

var obj = {
  age: 24,
  firstName: "jeehee",
  lastName: "hyun",
};

var keyName = "lastName";
console.log(obj.keyName);
console.log(obj[keyName]);

// user1 => age 30, height :178, name "minsu"
// user2 => age 35, height : 182, name "sujin"

// user1과 user 2의 키 차이 출력하기

var user1 = {
  age: 30,
  name: "minsu",
  height: 178,
};

var user2 = {
  age: 35,
  name: "sujin",
  height: 182,
};

console.log("두 사람의 키 차이는", user2.height - user1.height);

//원시데이터(Primitive Data)=> 실 저장되어 있는 값
var str = "jeehee hyun";
var copyStr = str;
copyStr = "minsu"; // str 과 별개의 값을 가진다.
console.log(str, copyStr);

//참조 타입 데이터=> 데이터가 저장되어 있는 참조 값
var obj = {
  age: 30,
  name: "seok",
};

var copyObj = obj; //참조값을 가져 오기 때문에 copyObj 를 변경하면 obj 도 같이 변경된다.
copyObj.age = 40;
console.log(copyObj, obj);

// 문 -> 코드 실행 단위
// 제어문 : 코드 블록을 필요에 따라 실행하여 프로그램의 흐름을 제어하는 실행문
// 코드 블록은 { } (-> 객체를 나타날 때 중괄호를 사용) 로 묶은 코드로 ,하나의 단위로써 실행된다.  
// 실행되는 문맥에 따라 다르게 해석/ { } -> 객체인지 코드블록인지 
// ; 을 붙이지 않음. (관습) 