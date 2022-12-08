let movieList = [
  {
    id: 1,
    title: "어벤저스",
    director: 1,
  },
  {
    id: 2,
    title: "블랙펜서2",
    director: 2,
  },
];

let directorList = [
  {
    id: 1,
    name: "안소니 루소",
    movies: [
      {
        id: 1,
        title: "어벤저스",
        director: 1,
      },
      {
        id: 3,
        title: "그레이맨",
        director: 1,
      },
    ],
  },
  {
    id: 2,
    name: "라이언 쿠글러",
    movies: [
      {
        id: 2,
        title: "블랙펜서2",
        director: 2,
      },
      {
        id: 4,
        title: "크리드",
        director: 2,
      },
    ],
  },
];

function searchTitle(title) {
  return new Promise(function (resolve, reject) {
    //성공했을때, 실패했을때의 경우, 통상 저렇게 쓴다.
    setTimeout(function () {
      //setTimeout 은 단순히 서버에서 받아오는 시간을 가정하기 위해 사용
      let movie = movieList.find((item) => {
        // true, false 값이 와야함.
        return item.title === title; // 전달받은 매개변수와의 비교
      });
      // if 문을 통해서 여러 에러를 분기 처리할 수 있다. => reject나 resolve 이후의 코드는 실행되지 않기 때문에 else 를 사용하지 않았ㄷr.
      if (typeof title !== "string") reject("영화제목은 문자열이어야 합니다."); // 밑의 searchTitle() 에 문자열이 아닌 것들 작성 -> 에러 발생.
      if (!movie) reject("해당 영화가 존재하지 않습니다."); //찾는 movie에 없는 경우,
      resolve(movie); //위에서 찾은 값 resolve
    }, 2000);
  });
}

// 감독이름으로 함수 만들기, 아이디값으로 감독을 resolve하는 promise 만들기
function getDirector(id) {
  return new Promise(function (resolve, reject) {
    // 생성자 함수라 인스턴스 만들려면 new 를 붙여야한다.
    // 1) promise 반환 -> return new Promise(function() {}), 2)함수에 첫번째인자, 두번째 인자 작성. function(resolve, reject)
    setTimeout(function () {
      let director = directorList.find((item) => item.id === id); // return 값 생략 -> 코드블럭 삭제.
      if (!director) reject("해당감독이 존재하지 않습니다."); // person이 없으면
      resolve(director);
    }, 2000);
  });
}

/*
searchTitle("영화") // true <-> typeof title , 에러 발생.
  .then(function (res) {
    // 있는 경우 ("어벤져스") -> then메서드로 처리, 없는 경우("아이언맨")->catch로 처리
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  }); //searchTitle의 반환값 Promise

getDirector(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/

// 합치기
// 문제점: Promise를 반환하는 함수를 중첩해서 사용하면 복잡한다.
searchTitle("어벤저스") // true <-> typeof title , 에러 발생.
  .then(function (res) {
    // 있는 경우 ("어벤져스") -> then메서드로 처리, 없는 경우("아이언맨")->catch로 처리
    return getDirector(res.director);
  })
  .then(function (res) {
    document.querySelector(".director").innerText += res.name;
    res.movies.forEach(function (item) {
      document.querySelector(".movieList").innerHTML += `<li>
            <h3>${item.title}</h3>  
      </li>`; //기존에 있는 내용에 맨뒤에 추가
    }); //배열이쥬
  })
  .catch(function (err) {
    console.log(err);
  }); //searchTitle의 반환값 Promise

/* 시험스포
css 공부 (미리미리하기), 화요일에 시험, 목요일에 최종시험
헤더 -> 마우스 올리면 색깔 바꾸는거, 슬라이더 (사진누르기), 마우스 누르면 사진 확대
*/

//async를 쓰는 이유
async function render(title) {
  try {
    let movie = await searchTitle(title); //async 의 짝궁 await, 여러번 쓸수도 있다. 첫번째 then
    let director = await getDirector(movie.director); // 두번째 then

    document.querySelector(".director").innerText = director.name;

    //기준 영화 목록 비우기
    let movieListElem = document.querySelector(".movieList");
    movieListElem.innerHTML = "";

    director.movies.forEach(function (item) {
      movieListElem.innerHTML += `<li>
          <h3>${item.title}</h3>  
    </li>`;
    });
  } catch (err) {
    console.log(err);
  }
}

render("블랙펜서2");

/* 
    fetch : http 통신을 통해 데이터를 받아올 수 있다. http => get(받아올때) post(보낼때), 기본값은 GET 
        => Response : 요청에 대한 결과값을 가진 객체. => 서버에서 보내준 응답. => 반대되는 개념은 Request(요청)
*/
fetch("http://localhost:3000/posts") //fetch함수가 프로미스를 받는다.
  .then(function (res) {
    res.json().then(function (res) {
      console.log(res);
    });
  });

/*
fetch(:"http://localhost:3000/posts",{
  method: "post",
  body: JSON.strungify({
    title: "test",
    author: "hbs9312",
  }),
}).then(function(res) {
    console.log(res);
});
*/

//REST API : GET(읽기), POST(쓰기), PATCH/PUT(업데이트/정보수정), DELETE(삭제) => Create, Read, Update, Delete => CRUD
//https://localhost:3000/posts => URL. 같은 URL이어도 메서드에 따라 통신이 달라진다.

function fetchData() {
  axios.get("http://localhost:3000/posts").then(function (res) {
    console.log(res);
    res.data.forEach((item) => {
      document.querySelector(".postList").innerHTML += `<li>
    ${item.title} - ${item.author}
    </li>`;
    });
  });
}

fetchData();

let btnSubmit = document.querySelector("button");
let inputTitle = document.querySelector(".title");
btnSubmit.addEventListener("click", function () {
  axios
    .post("http://localhost:3000/posts", {
      title: inputTitle.value,
      author: "hbs3912",
    })
    .then(function (res) {
      console.log(res);
    });
});
