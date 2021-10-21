// ! 변수
// * 재할당 불가
const a = 1;

// * 재할당 가능
let b = 2;

// * Global 변수 (좋지 않음.) -> strict 모드에서는 사용 불가
c = 0;

// 변수의 유효 범위
function scoped() {
  const a = 123;
  console.log(a);
}
scoped();
console.log(a);

if (false) {
  const a = 123;
  console.log(a);
} else {
  console.log(a);
}

function add(eventName, callback) {
  console.log(eventName);
  callback(`Hello event - ${eventName}`);
}

// 매개변수를 가지고 콜백 함수를 호출하기 때문에 익명함수를 사용해도 된다.
add("click", function (event) {
  console.log(event);
});

add("input", function (event) {
  console.log(event);
});

// 함수 선언문 -> 호이스팅 가능
function xyz(param) {
  return param + 200;
}
console.log(xyz(12));

// 함수 표현식 -> 호이스팅 불가
const abc = function () {};
abc();

// 화살표 함수
const def = param => param + 200;
console.log(def(123));

/*
매개변수가 없을 경우
* () => {} 
* function () {}

매개변수가 한 개인 경우, 소괄호를 생략.
* x => {} 
* function (x) {}

매개변수가 여러 개인 경우, 소괄호를 생략 불가.
* (x, y) => {} 
* function (x, y) {}

* x => { return x * x; }
암묵적 return, 위 표현과 동일.
* x => x * x  
* function(x) { return x * x; }

* () => { return { a: 1 }; }
위 표현과 동일.
* () => ({ a: 1 })  
* function() {return {a: 1};}

* () => {
*   const x = 10;
*   return x * x;
* }
* function() {
*   const x = 10;
*   return x * x;
* }
*/

// 즉시 실행 함수
(function (win, doc) {
  let aff = 23;
  console.log(aff);
})(window, document);

function f(n) {
  console.log("asdf", n);
  return undefined;
}

// timer setTimeout(callback, delay (ms))
setTimeout(f); // 로직
f(12); // 함수 x, 값 0

// 콜백 => 함수의 인수로 사용되는 함수
// 콜백 함수(Callback function)는 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수를 말한다.
// 콜백 함수는 매개변수를 통해 전달되고 전달받은 함수의 내부에서 어느 특정시점에 실행된다.

// setTimeout()은 webAPI에서 제공하는 함수이므로 기본 함수보다 콜스택 순위가 뒤다.

const user = {
  name: "HEROPY",
  age: 20,
  email: "asdfasdf@gmail.com",
  getAge: function () {
    console.log(this);
  },
  getName: () => {
    console.log(this);
  }
};

const userB = {
  name: "Neo"
};

console.log(user.age);
console.log(user.getAge());
console.log(user.getAge.call(userB));

// this
// 일반 함수에서는 호출 위치에 따라 정의됨
// 화살표 함수에서는 선언 위치에서 정의됨
