// live server 주소: 127.0.0.1 -> localhost와 같음. 5500 port.

// ! 원시형
const str = "123"; // "123", `123` -> 문자를 보간할 때(${데이터}): String
const strA = `123${789}`; // 강사 추천 방식 ->  문자와 숫자를 연결하는 것
const strB = "123" + 789; // String이 Number를 이김.

// * typeof 키워드 -> 예약어
console.log(typeof strB); // 123789
const num = 123;

console.log(typeof NaN); // number
console.log(123 * undefined); // NaN -> Number와 Number가 아닌 데이터와의 연산값

// ! 불린(부울린) Boolean
// true, false
// * ! 연산자
// 논리 NOT 연산자
if (123) {
  console.log("true!");
}

// ! Null, Undefined
// * null, undefined
// undefined: 정의되지 않은 데이터
// null: 정의가 되어있는 데이터
// 아무것도 의미하지 않다는 뜻은 같지만, 뉘앙스가 다르다. (null은 사용자가 사용한 것)
// undefined는 지정된 값이 없어서 아무 의미가 없는 것. null은 의도적으로 아무 의미가 없도록 한 것.

// ! 참조형
// * Object
// literal
const a = {
  // key: value
  a: "abc",
  b: "banana",
  c: "cherry",
  d: 123,
  e: null,
  f: {
    a: 1,
    b: 2
  }
};
console.log(a.a);
console.log(a.f.a);
// * Array
const b = [1, true, "s", null]; //length: 4
console.log(b);

// ! 형(데이터)변환
// = 할당 연산자
// == 동등연산자
// === 일치 연산자

// truthy
true == 1;
true == "1";
true == {};
true == [];
true == 123;
// ... 모든 데이터가 truthy

// falsy
false == false;
false == null;
false == undefined;
false == 0;
false == NaN;
false == "";

// usage
const res = [];
// array의 element가 존재하니?
if (res.length) {
  console.log("logic");
}

// ! 데이터 타입 알기
console.log(typeof 123); // number
if (typeof res === "number") {
  console.log("logic");
}

function checkType(type) {
  return Object.prototype.toString.call(type).slice(8, -1);
}

console.log(checkType(""));
console.log(checkType(123));
console.log(checkType(false));
console.log(checkType(null));
console.log(checkType(undefined));
console.log(checkType({}));
console.log(checkType([]));

// ! 삼항 연산자
const p = 123;
if (p) {
  console.log("Truthy");
} else {
  console.log("Falsey");
}

console.log(p ? "T" : "F");

const pp = p > 100 ? 1 : 0;

// ! 비교 연산자
console.log(a === b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(!a);

// ! 조건문
if (123) {
  // 구문
  // 로직1
} else if (23432) {
  // 구문
  // 로직2
} else {
  // 구문
  // 로직3
}

switch (123) {
  case "":
    console.log("a");
    break;
  case 123:
  case 567:
    console.log("b");
    break;
  default:
    console.log("c");
}

/* 예시)
const inputEl = document.querySelector("input");
console.log(inputEl);

inputEl.addEventListener("keyup", function (event) {
  console.log(event.key);
  switch (event.key) {
    case "Enter":
      console.log("Done");
      break;
    case "Escape":
      console.log("Not");
      break;
  }
});
*/

// ! 반복문

/*
for (시작조건; 종료조건; 변화조건) {

}

* k += 1 이것을 사용하는 것이 좋음. !! (나도 동감하는 부분)
* k = k + 1
* k++

++k 는 필요할 때 사용.

for (let k = 0; k < 12; k += 1) { 
  
}
*/

const obj = {
  a: 1,
  b: 2,
  c: 3
};

// 오브젝트를 반복해서 key를 반환
for (const key in obj) {
  console.log(key);
}

const arr = ["apple", "banana", "cherry"];

// 오브젝트를 반복해서 element를 반환
for (const el of arr) {
  if (el === "banana") {
    break;
  }
  console.log(el);
}

// break 사용 불가
arr.forEach(function (el) {
  console.log(el);
});

let i = 0;
while (i < 3) {
  console.log(i);
  i += 1;
}
