const body = document.querySelector("body");

const pressed = [];
const secretCode = "beetlejuicebeetlejuicebeetlejuice";

window.addEventListener("keyup", (e) => {
  //   console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join("").includes(secretCode)) {
    console.log("Key code entered.");
    body.innerHTML = "";
    body.style.background =
      "url(./images/beetlejuice.jpg) no-repeat center / cover";
  }
  console.log(pressed);
});
