// ! 세션 스토리지
window.sessionStorage.setItem("userName", "noze");
console.log(window.sessionStorage.getItem("userName"));

// * Local storage vs Session storage
// * Local storage는 반영구적. -> 주소를 기억 (주소만 같으면 스토리지가 같음.)
// 주소에 맞게 스토리지가 설정됨

// * Session storage는 브라우저를 끄면 데이터가 사라짐. 일회용. -> 활용도가 적음.
// 프레임워크에는 세션 스토리지를 대체하는 기능이 존재함. 그래서 잘 안씀

const user = {
  name: "Noze",
  age: 27,
  dancer: true
};
console.log(JSON.stringify(user));
window.localStorage.setItem("user", JSON.stringify(user));
const u = JSON.stringify(user);
console.log(JSON.parse(u));

// clear() -> 전체 삭제하는 것이지만, 실제로 사용하는 것은 조심스럽다
window.localStorage.clear();

// 쿠키로 로그인 정보를 저장할 수 있다.
// 만료일

Cookies.set("userName", JSON.stringify(user), {
  expiers: 2
});
const ex1 = Cookies.get("userName");
console.log(JSON.parse(ex1));
Cookies.remove("userName");
