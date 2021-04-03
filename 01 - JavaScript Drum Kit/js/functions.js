export function removeTransition(e) {
  // At long button press Becomes too fast so at a moment it does not recognize transform
  // and the if statement becomes true and returns.
  console.log("beforeeventlist");
  if (e.propertyName !== "transform") return;
  console.log("after eventlist");
  e.target.classList.remove("playing");
}

export function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();

  // Showing pressed key element in console
  // console.log(e);
}
