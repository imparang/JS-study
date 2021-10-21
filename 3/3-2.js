// ! DOM
// * HTML 구조 (Document object model)
// search // query  -> same means
// ex) mediaquery

// window.document -> node.js 에는 없음

// * querySelector -> returns the first element that is a descendant of node that matches selectors
// querySelectorAll ->returns all elements of a descendant of node that matches selectors
const divEl = document.querySelector("div");
console.log(divEl);
// [attribute]
const divEls = document.querySelectorAll("[class]");
console.log(divEls);
divEls.forEach(el => {
  el.addEventListener("click", () => {
    console.log(el.textContent);
  });
});

// const div = document.querySelector('#a')
// * 요소를 못찾으면 null 값 반환
const divID = document.getElementById("a");
console.log(divID);
divID.className = "abc"; // Setter : 값을 지정하는 것
console.log(divID.className); // Getter : 값을 얻어내는 것

// * classList -> add(), remove(), contains()
divID.classList.add("xyz");
divID.classList.remove("xyz");
console.log(divID.classList.contains("abc"));

console.log(divID.getAttribute("class"));
divID.setAttribute("id", "hello");

// innerText => textContent 사용 권고
console.log(divID.textContent);

const ulEL = document.querySelector("ul");
ulEL.innerHTML = "<li>123</li>";
