let userList = [
    { name : "Minsu", age: 20},
    { name: "Seok", age: 30},
    { name: " Yeji", age: 23},
    { name: "Minseok", age: 43},
]

let filterArr = userList.filter(function (user) {
    return user.age >= 30;
});

// 객체가 문자열이 되면 됨. 
let result = filterArr.map(function (user) {
    return user.name;
}); 

console.log(result);

// 메서드 체이닝=> 메서드의 반환 데이터를 예상하여 메서드를 연결해서 사용하는 것
let result02 = userList.filter((user) => user.age >= 30).map((user) => user.name);
console.log(result02);



