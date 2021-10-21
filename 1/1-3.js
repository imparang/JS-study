// includes, indexOf
const str = "hello";
const strr = "https://google.com/http";
console.log(str.includes("x"));
console.log(str.indexOf("x"));

// 정규 표현식 match, search
// '?' -> 없거나 1회 이상 있으면 일치
console.log(strr.match(/https?/g));

const inputEl = document.querySelector("input");
const div = document.querySelector("div");
inputEl.addEventListener("input", function (event) {
  // 문자.match(정규식)
  // 정규식.test(문자)
  const isValid =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
      event.target.value
    );

  if (isValid) {
    div.textContent = "유효함";
    div.style.color = "red";
  } else {
    div.textContent = "유효하지 않음";
    div.style.color = "blue";
  }
});

const st = " heLLo world      ";
console.log(st.search(/world/));

// replace
const img = document.querySelector("img");
img.addEventListener("click", function () {
  img.src = img.src.replace("300.jpg", "900.jpg");
});

// slice 시작부터 끝 직전까지
console.log(st.slice(4, -1));
console.log(st);

// split
// 메소드 체이닝
console.log(st.split("", 5));
console.log(st.split("").reverse().join(""));
const arr = ["apple", "banana", "cherry"];
console.log(arr.join(", "));

// toLowerCase, toUpperCase
console.log(st.toLowerCase());
console.log(st.toUpperCase());
console.log(st);

// trim -> 문자열 양 끝의 공백을 제거
// 데이터를 받을 때, trim()으로 공백을 제거해주고, (input, form) 일관된 데이터를 받아야 처리가 편함
console.log(st.trim());

/*
1. hello-world // dash-case, kebab-case   =>  html
2. hello_world // snake_case   =>  html
3. helloWorld // camelCase   =>  JavaScript
4. HelloWorld // PascalCase   =>  JavaScript
*/
