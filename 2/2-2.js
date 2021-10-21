// ! Object, Array
// * Array
// code convention -> el, el, el 쉼표 뒤에 띄어쓰기 해줘야 함.
import { arr } from "../sub.js";

console.log(arr.length);

// * concat() -> 파라미터로 주어진 매열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
// 기존 배열을 변경 x, 새로운 배열 반환
const array1 = ["a", "b", "c"];
const array2 = ["c", "e", "f"];
const array3 = _.uniq(array1.concat(array2));
console.log(array1);
console.log(array2);
console.log(array3);
console.log(_.uniq(array3));

// ? lodash 데이터를 다루는 상황에 대응하는 라이브러리

// * entries()
console.log(arr.entries());
for (const a of arr) {
  console.log(a);
}

// * every() -> 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트. 성공: true, 실패: false
// form에서 필수 요소가 작성되었는지 제출 단계에서 검수할 때 사용 가능.
const isValid = arr.every(function (element) {
  return element < 5;
});
console.log(isValid);

// * filter() -> 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// 배열의 개수가 바뀔 수 있음
// let users로 해서 users = users.filter(...)로 재할당 가능
const users = [
  {
    id: "123",
    name: "heropy",
    age: 85
  },
  {
    id: "456",
    name: "neo",
    age: 22
  },
  {
    id: "789",
    name: "amy",
    age: 32
  }
];
// filter도 지우는 용도로도 사용 가능
const newUsers = users.filter(function (user) {
  return user.id !== "123";
});
console.log(newUsers);

const newArr = arr.filter(function (el, idx, all) {
  console.log(el, idx, all);
  return el < 4;
});
console.log(newArr);
console.log(arr);

// * find() -> 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 그런 요소가 없다면 undefined를 반환합니다.
const foundUser = users.find(function (user) {
  return user.age >= 40;
});
console.log(foundUser);

// * findIndex() -> 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 만족하는 요소가 없으면 -1을 반환합니다.
const foundUserIndex = users.findIndex(function (user) {
  return user.id === "456";
});

console.log(foundUserIndex);
// users.splice(foundUserIndex, 1) -> 원본이 훼손된다.

//* forEach() -> 주어진 함수를 배열 요소 각각에 대해 실행합니다.
// 배열을 반복. 콜백을 배열의 엘리먼트 수만큼 반복 실행
// for 문 대신에 많이 쓰임.
// 중간에 멈출 수 없음
users.forEach(function (user) {
  user.name = user.name.toUpperCase();
});
console.log(users);

// 중간에 break 가능
for (let k = 0; k < users.length; k += 1) {
  users[k].name = users[k].name.toLowerCase();
}
console.log(users);

// * includes() -> 배열이 특정 요소를 포함하고 있는지 판별합니다.
// 원시 데이터일 때 유용하게 사용가능하지만, 참조형 데이터의 경우는 사용하기 어렵다.
// 선언된 위치가 달라서 메모리 주소가 다르다. 그래서 같은 데이터라 보지 않는다.
// 불변성 파트에서 다시 다룸
const hasUser = users.includes({
  id: "123",
  name: "heropy",
  age: 85
});
console.log(hasUser); // false

// * map() -> 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다
// 가공처리를 한 것
const newUser = users.map(function (user) {
  return {
    ...user,
    isValid: false
  };
});
console.log(newUser);

const newU = users
  .map(function (user) {
    return user.name;
  })
  .filter(function (name) {
    return name.length < 5;
  });
console.log(newU);

// * pop() -> 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
// * shift() -> 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 이 메서드는 배열의 길이를 변하게 합니다.
console.log(users.shift());
console.log(users);

// * push() -> 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다.
// * unshift() -> 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다.
console.log(
  users.push({
    id: "123",
    name: "lo",
    age: 85
  })
);
console.log(users);

//*  reduce() ->  배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// acc 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.
const sum = arr.reduce(function (acc, cur) {
  acc += cur;
  return acc;
}, 0);
console.log(sum);

// reduce() 사용한 것과 같음
// array 밖에 상위 변수가 존재해야 가능
let acc = 0;
arr.forEach(function (el) {
  acc += el;
});
console.log(acc);

const fruits = ["apple", "banana", "cherry"];
const names = ["heropy", "neo", "amy"];
const fruitNames = fruits.reduce(function (acc, fruit, index) {
  acc[fruit] = names[index];
  return acc;
}, {});
console.log(fruitNames);

// * slice() -> 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 원본 배열은 바뀌지 않습니다.
console.log(arr.slice(1, 4)); // 2, 3, 4

// * some() -> 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트합니다.
// 하나라도 통과하면 true
// every()는 모두 통과하면 true
const someArr = arr.some(function (el) {
  return el > 2;
});
console.log(someArr);

// 참조형 includes() 대신에 some() 사용
const replaceIncludes = users.some(function (el) {
  const userToCompare = { id: "123" };
  return el.id === userToCompare.id;
});
console.log(replaceIncludes);

// * splice() -> 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// 원본 수정됨
// arr.splice(1, 2, 100, 200, 300, 500);
console.log(arr);

// splice()로 지우면 length가 줄어서 index가 땡겨짐. 그래서 앞에서 부터 지우는 것이 아닌 뒤에서 부터 지워야 한다.
// 다른 방식으로 하는 것이 좋을 듯 ?
// arr.forEach(function (el, index) {
//   if (el > 1) {
//     arr.splice(index, 1);
//   }
// });
// console.log(arr);
// * sort() -> 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬은 stable sort가 아닐 수 있습니다. 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따릅니다.
// 음수냐 양수냐.
// 음수 또는 0이면 자리를 그대로. 양수면 자리를 체인지.
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);
