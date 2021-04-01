const btn = document.querySelector(".button");

btn.addEventListener("click", makeGreen);

const dogs = [
  { name: "Fredy", age: 2 },
  { name: "Snoop", age: 4 },
];

function makeGreen() {
  btn.style.color = "#BADA55";
  btn.style.fontSize = "3rem";
}

// Regular
console.log("Hello World!");

// Interpolated
console.log("Example witha %s string!", "blabla");

// Styled
console.log("%c Some styled text.", "font-size:15px; background:blue;");

// warning!
console.warn("Some warning message!");

// Error :|
console.error("Some error message!");

// Info
console.info("Some info message.");

// Testing

console.assert(
  btn.classList.contains("ouch"),
  "Some message if condition false."
);

// clearing
// console.clear();

// Viewing DOM Elements
console.log(btn);
console.dir(btn);

// console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count("some");
console.count("word");
console.count("some");
console.count("other");
console.count("word");
console.count("counting");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/emsad87")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
