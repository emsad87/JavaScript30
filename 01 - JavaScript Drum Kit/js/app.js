import * as f from "./functions.js";

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) =>
  key.addEventListener("transitionend", f.removeTransition)
);
window.addEventListener("keydown", f.playSound);
