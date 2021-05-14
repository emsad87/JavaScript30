const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const lon = document.querySelector('.lon');
const lat = document.querySelector('.lat');

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    speed.textContent = Math.round(data.coords.speed);
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;

    lon.textContent = Math.round(data.coords.longitude);
    lat.textContent = Math.round(data.coords.latitude);
  },
  (err) => {
    console.err(err);
    alert('You need to allow getting your locations data so this could work.');
  },
);
