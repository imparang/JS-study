import interact from "https://cdn.interactjs.io/v1.10.11/interactjs/index.js";

interact(".box")
  .resizable({
    edges: {
      right: ".box .resize-handle"
    }
  })
  .on("resizemove", event => {
    // on() -> event on
    const handle = event.target.querySelector(".resize-handle");
    handle.classList.add("active");
    console.log(event);
    event.target.style.width = `${event.rect.width}px`;
    event.target.style.height = `${event.rect.height}px`;
  })
  .on("resizeend", event => {
    const handle = event.target.querySelector(".resize-handle");
    handle.classList.remove("active");
  });
