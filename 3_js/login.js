let signInForm = document.querySelector(".signInForm");
//submit 이벤트는 form 태그 안에서 엔터키를 누르거나 submit 버튼을 누르면 일어난다.
signInForm.addEventListener("submit", function (e) {
  // form 태그의 submir 이벤트는 새로고침이 일어나기 때문에 막는다.
  e.preventDefault();
  console.log("submit");
  let form = new FormData(signInForm);
  console.log(form.entries()); // 반복 가넝
  // for~of : 반복 가능한 객체의 값들을 차례대로 참조할 수 있다.
  // FormData.prototype.values() : form 태그 안의 input 태그들의 입력값들을 반복 가능한 객체로 반환한다.
  // FormData.prototype.keys() : form 태그 안의 input 태그들의 name속성값들을 반복 가능한 객체로 반환한다.
  // FormData.prototype.entires() : input의 name 값과 입력값을 배열 형태로 반복 가능한 객체로 반환한다.
  let obj = {};
  for (let pair of form.entires()) {
    obj[pair[0]] = pair[1];
  }

  axios.post("http://101.101.218.43/users", obj).then(function (res) {
    console.log(res);
  });
});
// addEventListener를 왜 읽지 못하니!!!!!!!!! why...?

//html에 추가할 거 놓침
