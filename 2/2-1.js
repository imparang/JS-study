// toFixed  반환값이 String
const num = 3.14102837918;
console.log(typeof num);
console.log(typeof num.toFixed(2));
console.log(typeof parseFloat(num.toFixed(2)));

// parseInt, parseFloat 반환값이 Number
// parseInt(data, 진수)

// ! Math Object
// * Math.abs() -> 절대값 반환
// 차이를 얻고 싶을 때
console.log(Math.abs(-24));

// * Math.ceil() -> 올림
// * Math.round() -> 반올림
// * Math.floor() -> 버림

// * Math.max() -> MAX 값 반환
// 숫자로 형변환 한다. 숫자가 아니면 NaN으로 반환
// 파라미터가 없으면 -Infinity
console.log(Math.max("3", 2));
// * Math.min() -> MIN 값 반환

// * Math.random() -> 난수 생성 (0 ~ 1)
// 0 ~ 9 자연수 반환
console.log(Math.floor(Math.random() * 10));

// 두 수 사이의 자연수 반환
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(random(2, 7));

// ! Date Object
// ? 실무에서는 Moment.js를 많이 사용. 그런데 좀 무거워서 day.js도 많이 씀. 경량화되어 있어서 !

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
