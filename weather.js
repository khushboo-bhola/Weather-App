let box1=document.getElementById("box1");
const images=["girl.jpg","forest.jpg","tree.jpg","nature.jpg","sunny.jpg"];
        //let random_image=images[Math.floor(Math.random () * images.length)];
        //document.body.style.backgroundImage=`url(${random_image})`; 

        for(let i=0;i<images.length;i++){
            setTimeout(()=>{
                let random_image=images[Math.floor(Math.random () * images.length)];
                box1.style.backgroundImage=`url(${random_image})`
            },i*3000);
        }

const now=new Date();
box1.innerText=`${now.toDateString()} \n ${now.toLocaleTimeString()}`;


const api="75fa8b3529f445cd98f171319252210";
const btn=document.getElementById("btn");
const box=document.getElementById("data");

 let getdata=async(event)=>{
    event.preventDefault();
    const city=document.getElementById("city").value;
     if (!city) {
    alert("Please enter a city name!"); // added basic validation
    return;
  }
    let response=await fetch(`https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}`);
    console.log(response);
    let data=await response.json();
    console.log(data)
    let temp = data.current.temp_c;
  let humidity = data.current.humidity;
  let region = data.location.region;
  let weather;
if(temp < 10){
    weather="⛈️";
}
else if(temp >= 10 && temp < 20){
    weather="🌦️"
 }
 else if (temp < 35) {
  weather = "☀️";
}
else{
    weather="🔥";
}
  box.innerHTML = `
  <p><span>🌡️ Temperature:</span> ${temp}°C</p>
      <p><span>💧 Humidity:</span> ${humidity}%</p>
      <p><span>📍 Region:</span> ${region}</p>
      <p><span>⛅ Condition:</span> ${weather}</p>
`;

 }
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

h1.style.transition = "color 1s ease-in-out";
h2.style.transition = "color 1s ease-in-out";

setTimeout(() => {
  h1.style.color = "#ffd369";
  h2.style.color = "#ffd369";
}, 5000);

const bu2=document.getElementById("bu2");
bu2.addEventListener("mouseenter",()=>{
  const currentLeft = parseInt(window.getComputedStyle(dislike).left) || 0;
  const moveDirection = Math.random() > 0.5 ? 3 : -3;
  bu2.style.position = "relative";
  bu2.style.transition = "left 0.2s ease";
  bu2.style.left = `${currentLeft + moveDirection}px`;
})