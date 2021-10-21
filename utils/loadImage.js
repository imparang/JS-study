export default function (src) {
  return new Promise(resolve => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("load", event => {
      resolve();
    });
  });
}
