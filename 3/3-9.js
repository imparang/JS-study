const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c";

//* 비동기 통신 -> 네트워크는 특성상 통신에 있이서 실행 시간을 보장하지 않기 때문에
//* 비동기로 통신하여 그 다음 코드를 실행하도록 한다.
// 데이터가 오면 실행 (순서대로 딱딱 실행하는 것이 아님)
fetch(url)
  .then(response => response.json())
  .then(response => {
    console.log(response);
  });
console.log("Done!");

//! 비동기 패턴
//* 비동기 패턴 순서, 필요성

// function a() {
//   console.log("a");
// }
// function b() {
//   console.log("b");
// }
// a();
// b();
// a
// b

// function a(cb) {
//   setTimeout(() => {
//     console.log("a");
//     cb();
//   });
// }

// a();
// b();
// b
// a

//* a의 먼저 실행을 보장
// a() 안에 콜백 함수로 b()를 호출 -> a()가 실행되고 b()가 실행됨
// 콜백 함수의 활용 사례
// a(() => {
//   b(() => {
//     c();
//   });
// });

// 콜백 지옥 ㅜ
// a(() => {
//   b(() => {
//     c(() => {
//       d(() => {
//         e(() => {
//           console.log("done");
//         });
//       });
//     });
//   });
// });

// * Promise
function a() {
  // 콜백의 위치에서 resolve를 실행 -> 일종의 콜백
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("a", 1);
      resolve();
    });
  });
}

function b() {
  // 콜백의 위치에서 resolve를 실행 -> 일종의 콜백
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("b", 2);
      resolve();
    });
  });
}
function c() {
  // 콜백의 위치에서 resolve를 실행 -> 일종의 콜백
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("c", 3);
      resolve();
    });
  });
}
function d() {
  // 콜백의 위치에서 resolve를 실행 -> 일종의 콜백
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("d", 4);
      resolve();
    });
  });
}
function e() {
  // 콜백의 위치에서 resolve를 실행 -> 일종의 콜백
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("e", 5);
      resolve();
    });
  });
}

// * 조금 더 깔끔해졌다. Promise 인스턴스를 리턴하기 때문에 가능한 코드
a()
  .then(() => b())
  .then(() => c())
  .then(() => d())
  .then(() => e())
  .then(() => console.log("Done"));

// * 최신 문법이고 더 편할 수 있다.!!
(async function () {
  await a();
  await b();
  await c();
  await d();
  await e();
  console.log("DONE");
})();

// 가능은 하지만 이러한 패턴은 콜백지옥과 같다.
// a().then(() => {
//   b().then( () => {
//     ...
//   });
// });

// * 그 때, a가 실행되고 나서
// a().then(res => b());

// // async/await
// (async function () {
//   // 기다려!
//   await a();
//   b();
// });
