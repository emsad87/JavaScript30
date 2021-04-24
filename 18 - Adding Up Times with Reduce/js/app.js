const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map((node) => node.dataset.time)
  .map((timeCode) => {
    const [min, sec] = timeCode.split(":").map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

// Add total time element
let totalTime = document.createElement("div");
totalTime.classList.add("totalTime");
totalTime.innerHTML = `Total time: ${hours}:${mins}:${secondsLeft}`;
document.body.prepend(totalTime);

// Add time to every video element
timeNodes.forEach((e, index) => {
  let time = document.createElement("span");
  time.innerHTML = `${e.dataset.time}`;

  timeNodes[index].append(time);
});
