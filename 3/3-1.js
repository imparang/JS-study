const user = {
  id: "1",
  name: "heymama",
  age: 85,
  license: [
    { name: "1", isValid: true },
    { name: "2", isValid: true }
  ]
};
// lodash 라이브러리 사용: deep copy => memory를 많이 잡아 먹음
const copyUser = _.cloneDeep(user);
console.log(copyUser);

// shallow copy  => 참조형 데이터의 mutable
const cloneUser = { ...user };
cloneUser.age = 22;
cloneUser.license[0].isValid = false;
console.log(user);
console.log(cloneUser);

// * 일반적으로는 shallow copy를 사용하다가 필요할 때, deep copy 사용
