const url = "https://www.omdbapi.com/?i=tt3896198&apikey=7035c60c";

fetch(url)
  .then(res => res.json())
  .then(res => console.log(res));

// * async/await
async function fn() {
  // 기다렸다가 실행이 완료되면 반환
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
fn();

import { loadImage } from "../utils/index.js";
const src =
  "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX1300.jpg";

const loading = document.querySelector(".loading");
const img = document.querySelector("img");

// loadImage(src).then((res) => {
//   console.log(res) // 123
//   img.src = src;
//   loading.remove();
// });

(async function () {
  const res = await loadImage(src);
  console.log(res); // 123
  img.src = src;
  loading.remove();
})();
