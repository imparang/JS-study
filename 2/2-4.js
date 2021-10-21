// * this
const timer = {
  timerName: "timezone",
  timeout: function () {
    // console.log(this.timerName);
    setTimeout(() => {
      // 일반 함수의 경우, setTimeout을 호출할 때, window를 this로 참조
      // 화살표 함수의 경우, setTimeout을 선언할 때, 그 위치를 this로 참조
      console.log(this.timerName);
      // console.log(this);
    }, 1000);
  }
};
// timer.timeout();

const timerB = {
  timerName: "leon"
};
timer.timeout();
timer.timeout.call(timerB);

// * prototype
// 생성자 함수 -> 객체 리터럴{}로 쉽게 만들 수도 있음
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// prototype에 연결
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
User.prototype.kind = "Human";

const hey = {
  firstName: "heymama",
  lastName: "heypapa",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(hey.getFullName());

// const bye = {
//   firstName: "byemama",
//   lastName: "byepapa"
// };
// console.log(hey.getFullName.call(bye));

// 인스턴스 생성 -> 생성자 함수의 prototype을 참조
const dkd = new User("aiki", "monika");
console.log(dkd);
console.log(dkd.getFullName());

const bye = new User("byemama", "byepapa");
console.log(bye);
console.log(bye.getFullName === dkd.getFullName);

Array.prototype.double = function (callback) {
  // this -> arr
  return this.map(function (el) {
    return el * 2;
  });
};

const arr = [3, 4, 5, 6];
console.log(arr.double());
console.log(arr);

Object.prototype.heymama = function () {
  // 일반 함수의 경우 호출된 곳이 this, 화살표 함수는 선언된 곳이 this
  // 일반 함수의 경우 this가 window로 설정됨
  // 그래서 화살표 함수 사용
  Object.keys(this).forEach(key => {
    this[key] *= 2;
  });
};

const obj1 = {
  a: 3,
  b: 4,
  c: 5
};

obj1.heymama();
console.log(obj1);

// ! class
class Users {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get kind() {
    return "Human";
  }
}

const user1 = new Users("Jisung", "Park");
console.log(user1);

// usage
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
  start() {
    return true;
  }
  stop() {
    return false;
  }
}
const carA = new Vehicle("ionic3", 4);
console.log(carA);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
const cycle = new Bicycle("3000lee", 2);
console.log(cycle);

// 상속한 것에 대해 확장하는 형태
class Bus extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
  start() {
    if (this.license.isValid) {
      return true;
    }
    throw "무면허";
  }
}

const myLicense = {
  name: "",
  isValid: true
};

const bus = new Bus("paran bus", 4, myLicense);
console.log(bus);
console.log(bus.start());

// ! 전개 연산자
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];
console.log(arr3);
console.log(arr4);

const obj2 = { a: 1, b: 2 };
const obj3 = { b: 3, d: 4 };
// const obj4 = Object.assign({}, obj2, obj3);
const obj4 = {
  ...obj2,
  ...obj3
};
console.log(obj4);

function arg(...rest) {
  console.log(...rest);
}
arg(...arr1);

// ! destructuring assignment
const arrA = [1, 2, 3];
const [, y, z] = arrA;
console.log(y, z);
console.log(arrA);

// Object 내부 작성 순서는 보장되지 않는다. 하지만 프로퍼티 키는 고유함
const objA = {
  a: 1,
  b: 2,
  c: 3,
  d: 100,
  e: 9
};
const { a: aladin, b: beronika, d = 700, ...rest } = objA;

console.log(aladin, beronika, d, rest);

// 기본값 설정
function xyz(a = 0) {
  return a * 2;
}
console.log(xyz(3));
console.log(xyz());

function abc(o) {
  // optional chaining
  return o?.name?.toUpperCase();
}
console.log(abc({ name: "gimozzi" }));
console.log(abc());

/* 없는 데이터를 검색한다면 undefined가 출력됨 */
