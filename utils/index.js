export default {
  fn: ["checkType", "random"],
  name: "utils",
  author: "noze"
};

// 가져오자마자 내보내기
// * utils에 해당하는 것들을 한 곳에 모아서 내보내는 역할
export { default as checkType } from "./checkType.js";
export { default as random } from "./random.js";
export { default as loadImage } from "./loadImage.js";
export { default as Loader } from "./loader.js";
export { default as generateID } from "./generateID.js";
