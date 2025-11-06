let box1 = document.getElementById("box1");

const images = ["girl.jpg", "forest.jpg", "tree.jpg", "nature.jpg", "sunny.jpg"];

// Background slideshow
for (let i = 0; i < images.length; i++) {
  setTimeout(() => {
    let random_image = images[Math.floor(Math.random() * images.length)];
    box1.style.backgroundImage = `url(${random_image})`;
  }, i * 3000);
}

// Show date & time
const now = new Date();
box1.innerText = `${now.toDateString()} \n ${now.toLocaleTimeString()}`;

// Weather API
const api = "75fa8b3529f445cd98f171319252210";
const box = document.getElementById("data");

async function getdata(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;

  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`
  );

  let data = await response.json();

  let temp = data.current.temp_c;
  let humidity = data.current.humidity;
  let region = data.location.region;

  let weather;
  if (temp < 10) weather = "⛈️";
  else if (temp >= 10 && temp < 20) weather = "🌦️";
  else if (temp < 35) weather = "☀️";
  else weather = "🔥";

  box.innerHTML = `
    <p><span>🌡️ Temperature:</span> ${temp}°C</p>
    <p><span>💧 Humidity:</span> ${humidity}%</p>
    <p><span>📍 Region:</span> ${region}</p>
    <p><span>⛅ Condition:</span> ${weather}</p>
  `;
}

// Title animation
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

h1.style.transition = "color 1s ease-in-out";
h2.style.transition = "color 1s ease-in-out";

setTimeout(() => {
  h1.style.color = "#ffd369";
  h2.style.color = "#ffd369";
}, 5000);

// Funny Dislike button
const bu2 = document.getElementById("bu2");


