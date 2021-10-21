let users = [
  { id: "1", name: "HEROPY" },
  { id: "2", name: "Neo" },
  { id: "3", name: "Lucas" },
  { id: "4", name: "Lewis" },
  { id: "5", name: "Evan" },
  { id: "6", name: "Amy" }
];
const ulEl = document.createElement("ul");

users.forEach((user, index) => {
  const liEl = document.createElement("li");
  liEl.dataset.userId = user.id;
  liEl.textContent = user.name;
  liEl.addEventListener("click", event => {
    users = users.filter(u => u.id !== user.id);
    liEl.remove();
    console.log(users);
  });
  ulEl.append(liEl);
});

const bodyEl = document.body;
bodyEl.append(ulEl);

const divEl = document.querySelector("div");

const handler = event => {
  console.log("click");
};

divEl.addEventListener("click", handler);
// handler event is removed
divEl.removeEventListener("click", handler);

divEl.addEventListener("click", event => {
  console.log(event);
});
//* currentTarget | target의 차이

//* preventDefault() -> 기본 동작을 작동하지 않게 한다.
const aEl = document.querySelector("a");
aEl.addEventListener("click", event => {
  event.preventDefault();
  console.log(event);
});

//* stopPropagation() -> 전파가 멈춘다.  => 김버그 DOM 강의 설명이 더 좋다.
// ? 캡쳐링 - 버블링 공부할거면 김버그 ㄱㄱ

const parentEl = document.querySelector(".parent");
const childEl = document.querySelector(".child");

window.addEventListener("click", event => {
  console.log("window");
});
document.body.addEventListener(
  "click",
  event => {
    console.log("body");
  },
  { capture: true }
);
parentEl.addEventListener("click", event => {
  event.stopPropagation();
  console.log("parent");
});
childEl.addEventListener("click", event => {
  event.stopPropagation();
  console.log("child");
});

// loading
const img = document.createElement("img");
const loading = document.createElement("div");

img.src =
  "https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg";
img.addEventListener("load", () => {
  loading.remove();
});

loading.textContent = "loading...";
document.body.append(loading, img);
