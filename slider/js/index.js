// 2번 버튼 클릭시 2번 아이템 보이게 처리하기

/*
1) 버튼 가져오기
2) 버튼에 클릭이벤트 바인딩하기 
3) 바인딩 함수 작성 => 옆으로 이동시키기 (뭐를 이동시킬지 고민하기)
*/

let btnList = document.querySelectorAll(".btnList li")

//이벤트 위임을 이용하는 것이 좋ㄷr...☆★
btnList.forEach((btn,idx) => {
    btn.addEventListener("click", function () {
    document.querySelector(".slideList").style.transform = `translate(${idx * -100}%)`;

    });
});

/*
let btn01 = document.querySelector(".btnList li:nth-child(1)");   //querySelector: css 선택자
let btn02 = document.querySelector(".btnList li:nth-child(2)");   //querySelector: css 선택자
let btn03 = document.querySelector(".btnList li:nth-child(3)");   //querySelector: css 선택자
*/

/*
btn[0].addEventListener("click", function() {
    document.querySelector(".slideList").style.transform = "translate(0)";
});
btn[1].addEventListener("click", function() {
    document.querySelector(".slideList").style.transform = "translate(-100%)";
});
btn[2].addEventListener("click", function() {
    document.querySelector(".slideList").style.transform = "translate(-200%)";
});
*/

