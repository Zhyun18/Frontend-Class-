/*

    동기(Synchronous) 와 비동기 (Asynchronous)

    - 동기 코드는 순서대로 동작한다. 실행결과를 기다린 후에 다음 코드가 실행된다. (정확한 뜻은 아니니 나중에 구글링을 권장.)
        => 순서를 보장하기 때문에 흐름을 파악하기에 좋다. 
        => 완료되기 전까지 다른 코드를 실행하지 않기 때문에 비효율적이다. 
    
    - 비동기 코드는 순서를 보장하지 않는다. 실행결과를 기다리지 않고 다음코드를 실행할 수 있다. 
        => 순서를 보장하지 않기 때문에 흐름 파악이 비교적 어렵다.
        => 완료되기 전까지 기다리지 ㅇ낳고 다음 코드를 실행하기 때문에 효율적이다. 
        => 콜백함수를 통해서 동기적인 코드처럼 작성을 했다. => 콜백지옥에 빠지기 쉽상! 가독성, 유지보수 우우~~ -> 흐름파악이 어렵다 이말이야~.
        => 주로 서버에서 데이터를 받아오거나 이미지 파일을 로딩하는 것처럼 오래 걸리는 함수들 중에 비동기 함수가 많다. 

    - JS 는 기본적으로 동기적인 프로그래밍 언어다. 
        => 비동기 처리는 브라우저, node.js 등이 도와준ㄷr...☆★

    */
function sum(a, b) {
  return a + b;
}
let num = sum(10, 5);
console.log(num);

// 동시에 일어난다. -> 함수 실행 요청 -> 결과가 바로 온다.

console.log("반복문 시작");
for (let i = 0; i < 100000000; i++) {}
console.log("반복문 끝");

// for 문의 결과: 반복을 종료하였을때, i ++ 100번째의 연산을 하는 중 ㄷㄷ.
// for 문이 끝나기 전까지 다른코드는 실행되지 않는다.

// setTimeout(콜백함수, 지연함수(ms)) : 지정한 지연시간이 지난 후에 콜백함수를 실행시킨다. 비동기적으로 동작한다.
/*
console.log("setTimeout 시작");
setTimeout(function () {
  console.log("2초 경과!");
  console.log("setTimeout 끝");
}, 2000);
*/

console.log("setTimeout 시작");
setTimeout(function () {
  // 2초뒤에 getMovie 함수가 실행. render -> callback 함수로 전달.
  getMovie(render);
}, 2000);

function getMovie(callback) {
  // 받아오는 함수라 무슨 코드를 실행할 줄 모른다.
  callback("마녀2");
}

function render(title) {
  //영화제목 -> 변수명 : title
  console.log(title);
}

function fetchData() {}

/*
 Promise : 비동기 코드를 쉽게 처리할 수 있는 객체.

    => 인자로 전달도니 콜백함수의 첫번째 인자는 resolve, 두번째 인자는 reject 함수가 전달된다.
    => resolve(): 성공했을 때. resolve에 전달된 값은 Promis.prototype.then 의 콜백함수의 첫번째 인자로 전달된다. 
    => reject(): 실패했을 때. 에러를 발생시킨다. Promise.prototype.catch의 첫번째 인자로 전달된다. 
    => catch() : 에러를 받아서 처리할때 사용하는 함수. 에러처리를 안하면 에러가 발생해서 이후의 코드가 실행되지 않.는.다.

 */
let promise = new Promise(function (resolve, reject) {
  //resolve, reject -> 함수
  setTimeout(function () {
    if (true) {
      resolve("마녀2");
    } else {
      reject("데이터 조회 실패");
    }
    //resolve(1);
    //reject("데이터를 받아오는데 실패했습니다.");
  }, 2000);
}); //대문자 : 생성자. 함수를 인자로 전.달.

promise
  .then(function (res) {
    //resolve-then : 성공한 데이터를 받아서 다른 처리
    console.log(res);
    //render(res);
    //console.log(res); // 1이 나옴
  })
  .catch(function (err) {
    // reject-catch : 에러가 발행한다. 에러를 받아서 처리.
    console.log(err);
  });

//render : 가정하는 함수

function getData(title) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(title);
    }, 3000);
  });
}

/*
getData("마녀2").then((res) => {
  renderMovie(res);
});
*/

/* 
  async/await : 비동기 처리 함수 
    - async 키워드를 함수 앞에 붙이면 Promise를 동기적으로 쉽게 처리할 함수로 변경된다. 
    - Promise를 반환하는 함수 앞에 await 을 붙이면 resolve 혹은 reject 되기 전까지 다음 코드를 실행하지 않는다. 
        => Promise 의 결과를 반환한다
        => await이 없으면 Promise 객체 자체를 반환한다. 
        => async 함수 내에서 참조하면 resolve 값을 잘 참조하지만 async 함수의 리턴값은 해당 값을 resolve 하는 Promise 가 반환된다. 

*/
async function renderMovie(title) {
  /*
  let res = await getData(title); // await을 붙이면 promise를 기다려준다. => 프로미스를 반환하는 함수 앞에 await을 붙이면 resolve/reject 되기 전까지 다음 코드를 실행하지 않는다. 
  console.log(res);
  render(res);
*/
  return 10;
}

/*
function renderMovie(title) {
  document.title = title;
}
*/
//get Data => promise 반환/ title -> render.Movie -> document.title

let result = renderMovie("어벤져스");
console.log(result.then((res) => console.log(res)));

let songList = [
  { id: 1, title: "The Blowing", singer: "HighLight" },
  { id: 2, title: "DayDream", singer: "Highlight" },
  { id: 3, title: "Alone", singer: "HighLight" },
];

function getSong(id) {
  return new Promise(function (resolve, reject) {
    let song = songList.find(function (song) {
      // filter ->  배열을 반환 find -> 배열이 아니라 객체 값 자체를 반환 => Array.prototype.find() : filter와 비슷한데 처음 요소 하.나.만 반환.
      return id === song.id;
    });
    if (!song) reject("해당하는 노래가 없습니다.");
    resolve(song);
  }, 3000);
}
let itTrue = true;
function test() {
  if (fasle) return;
  console.log("실행");
}

getSong(1).then(function (res) {
  console.log(res);
});

// 나는 오류가 나서 나오지 않아요~

getSong(4)
  .then(function (res) {
    document.body.innerHTML = `<h2>${res.title} - ${res.singer}</h2>`;
  })
  .catch(function (err) {
    console.log(err);
    document.body.innerHTML = `<h2>${err}</h2>`;
  });

async function renderSong(id) {
  // try/catch : try문에 코드를 실행하다가 에러가 발생하면 catch문으로 넘어간ㄷr.
  try {
    let song = await getSong(id);
    document.body.innerHTML = `<h2>${res.title} - ${res.singer}</h2>`;
  } catch (err) {
    console.log(err);
  }
}
renderSong(4);
