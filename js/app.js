const hoverSound = document.querySelector(`#hoverSound`);
const clickSound = document.querySelector(`#clickSound`);

const daysList = document.querySelector('ul');

const daysData = './days.json';

const getData = async (dataFile) => {
  try {
    const resp = await fetch(dataFile);
    const data = await resp.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  const data = await getData(daysData);

  for (let i in data) {
    const daysListEl = document.createElement('li');
    daysListEl.innerHTML = `
    <a href="${data[i].url}">
      <div class="number">${data[i].nmb}</div>
      <div class="text">${data[i].txt}</div>
    </a>
  `;

    daysListEl.addEventListener('mouseenter', () => {
      if (!hoverSound) return;

      hoverSound.currentTime = 0;
      hoverSound.play();
    });

    daysList.append(daysListEl);
  }

  // TODO Loop through fetched data with map()
})();
