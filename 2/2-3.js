// * Object.assign() -> 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.

const userA = {
  name: "heropy",
  age: 85,
  email: "wiefofow@naver.com"
};
const userB = {
  name: "neo",
  age: 22,
  isValid: false
};
Object.assign(userA, userB);
console.log(userA);
console.log(userB);

const userAB = Object.assign({}, userA, userB); // shallow copy
console.log(userAB);
console.log(userAB === userA); // false

const userC = userB;
console.log(userC);
console.log(userA === userB); // false -> memory address is different
console.log(userC === userB); // true -> memory address is same

// usage
const div = document.querySelector(".object");
const styles = {
  color: "blue",
  backgroundColor: "orange",
  fontWeight: "bold",
  overflow: "hidden",
  fontSize: "24px"
};
Object.assign(div.style, styles);
// Object.assign(input.style, styles);
// // div.style = styles

// * Object.entries() -> for...in와 같은 순서로 주어진 객체 자체의 enumerable 속성 [key, value] 쌍의 배열을 반환합니다. (for-in 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다).

console.log(Object.entries(userB));
for (const [key, value] of Object.entries(userB)) {
  console.log(`${key}: ${value}`);
}

// * Object.freeze() -> 객체를 동결합니다. 동결된 객체는 더 이상 변경될 수 없습니다. 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. freeze()는 전달된 동일한 객체를 반환합니다.
const user = {
  name: "js",
  age: 12,
  isValid: true
};
Object.freeze(user);
// //user.name = "leon"; -> freeze() 상태

// * Object.isFrozen() -> 객체가 동결됐는지 판별합니다.
console.log(Object.isFrozen(user)); // true

// * Object.keys() -> 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.
const object1 = {
  a: "somestring",
  b: 42,
  c: false
};
console.log(Object.keys(object1));

// * Object.values() -> 전달된 파라미터 객체가 가지는 (열거 가능한) 속성의 값들로 이루어진 배열을 리턴합니다. 이 배열은 for...in 구문과 동일한 순서를 가집니다. (for in 반복문은 프로토타입 체인 또한 열거한다는 점에서 차이가 있습니다.)
console.log(Object.values(object1));
