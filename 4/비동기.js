import { Loader, loadImage } from "../utils/index.js";

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c";

/*
async function fetchMovie() {
  // await로 인해 처리가 다  끝나고 실행 (보장해줌)
  try {
    const res = await fetch(url);
    console.log("normal");
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
}
*/

// * 위의 코드와 같은 의미이다.
// async keyword  사용 안할 시
// function fetchMovie() {
//   return new Promise(resolve => {
//     fetch(url)
//       .then(res => res.json())
//       .then(res => resolve(res));
//   });
// }

function fetchMovie() {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    const data = await res.json();
    // JSON으로 파싱한 데이터를 resolve() 안에 넣어주면 then()의 인수로
    // async/await의 await 함수이름()에 들어간다.

    if (data.Error) {
      reject(data.Error);
    }
    resolve(data);
  });
}

console.log(fetchMovie()); // Promise

const loader = new Loader({
  el: ".movie-loading",
  color: "red"
});
loader.start();

const posterLoader = new Loader({
  el: ".poster-loading",
  color: "green"
});
posterLoader.start();

// then
fetchMovie()
  // resolve() 위치 -> 되었을 때
  .then(movie => {
    console.log(movie);
    const movieEl = document.querySelector(".movie");
    const titleEl = movieEl.querySelector(".movie__title");
    const posterEl = movieEl.querySelector(".movie__poster");
    const posterImgEl = posterEl.querySelector("img");
    titleEl.textContent = movie.Title;
    posterImgEl.src = movie.Poster;
    loadImage(movie.Poster).then(() => {
      posterLoader.stop();
    });
  })
  // reject() 위치 -> 안되었을 때
  .catch(errorMsg => {
    console.log(errorMsg);
    const errorEl = document.createElement("div");
    document.body.append(errorEl);
    errorEl.textContent = errorMsg;
  })
  .finally(() => {
    console.log("Done");
    loader.stop();
  });

// * async & 즉시실행함수 => 위와 같음
// ? 에러가 발생할 것이 확실한 부분에서 try-catch를 사용
// 예외처리
(async function () {
  try {
    const movie = await fetchMovie();
    console.log(movie);
  } catch (error) {
    // reject()의 인수를 error로 받음
    console.log(error);
    const errorEl = document.createElement("div");
    document.body.append(errorEl);
    errorEl.textContent = error;
  } finally {
    console.log("Done");
  }
})();
