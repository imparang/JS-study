import { Loader, loadImage } from "../utils/index.js";

const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c";

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

(async function () {
  try {
    const movie = await fetchMovie();
    console.log(movie);
    const movieEl = document.querySelector(".movie");
    const titleEl = movieEl.querySelector(".movie__title");
    const posterEl = movieEl.querySelector(".movie__poster");
    const posterImgEl = posterEl.querySelector("img");
    titleEl.textContent = movie.Title;
    loader.stop();
    posterImgEl.src = movie.Poster;
    await loadImage(movie.Poster);
    posterLoader.stop();
  } catch (error) {
    // reject()의 인수를 error로 받음
    console.log(error);
    const errorEl = document.createElement("div");
    document.body.append(errorEl);
    errorEl.textContent = error;
  } finally {
    loader.stop();
    posterLoader.stop();
    console.log("Done");
  }
})();
