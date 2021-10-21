const users = [
  { id: "1", name: "HEROPY" },
  { id: "2", name: "Neo" },
  { id: "3", name: "Lucas" },
  { id: "4", name: "Lewis" },
  { id: "5", name: "Evan" },
  { id: "6", name: "Amy" }
];

const ul = document.createElement("ul");
users.forEach(user => {
  const li = document.createElement("li");
  li.textContent = user.name;
  ul.append(li);
});
document.body.append(ul);

// 데이터를 기준으로 생각해야 한다.! -> 화면이 바뀌면 데이터가 바뀌고
// 데이터가 바뀌면 화면이 바뀌도록
const sortList = new Sortable(ul, {
  handle: "li",
  // 브라우저마다 구현된 방식이 다르기 때문에 크로스브라우징을 고려해주면 좋다.
  // 속도와 결정을 해야함. 하지만 안정성을 위해서는 true로 해주는 것이 좋다. 내장 기능이 더 좋기 때문에
  forceFallback: true,
  onEnd(event) {
    const { oldIndex, newIndex } = event;
    const clone = users[oldIndex];
    users.splice(oldIndex, 1);
    users.splice(newIndex, 0, clone);
    console.log(users);
  }
});
