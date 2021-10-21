const el = document.querySelector("[contenteditable]");
el.addEventListener("blur", event => {
  console.log(event.target.innerHTML);
});

const ul = document.querySelector("ul");

// prepend() -> 해당 기준요소의 내부의 가장 앞쪽에 밀어넣어줌
// append() -> 해당 기준요소의 내부의 가장 뒤쪽에 밀어넣어줌
const li = document.createElement("li");
li.textContent = "asdf";
// ul.prepend(li);
ul.append(li);

ul.addEventListener("click", () => {
  li.remove();
});

// dataset -> html attribute data- 를 활용
console.log(ul.dataset.heyMama); // dash표기법 -> camelCase로 할 것
