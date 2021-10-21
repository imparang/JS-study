import generateID from "./generateID.js";

export default class {
  constructor(options) {
    const { el = null, size = 30, width = 4, color = "#333" } = options;
    const _id = generateID();
    this.el = document.querySelector(el);
    this.el.classList.add("my-loader", `id-${_id}`);
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `.my-loader.id-${_id} {
        display: none;
        width: ${size}px;
        height: ${size}px;
        border-width: ${width}px;
        border-style: solid;
        border-color: ${color};
        border-radius: 50%;
        border-top-color: transparent;
        animation: loading-spin 800ms linear infinite;
      }
      .my-loader.start {
        display: block;
      }

      @keyframes loading-spin {
        0 {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    document.head.append(styleEl);
  }
  start() {
    this.el.classList.add("start");
  }
  stop() {
    this.el.classList.remove("start");
  }
}
