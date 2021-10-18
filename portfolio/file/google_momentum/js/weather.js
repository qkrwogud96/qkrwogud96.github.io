const weatherIcon = document.querySelector("#weather img");
const weatherArea = document.querySelector("#weather .area");
const weatherTemp = document.querySelector("#weather .temp");

const getWeather = (lat, lon) => {
  const API_KEY = "3a5c3fffd5bc6ddcdf75ef7b662740b1";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //Weather API
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const name = data.name;
      const nowWeather = data.weather[data.weather.length - 1];

      weatherIcon.src = `http://openweathermap.org/img/wn/${nowWeather.icon}@2x.png`;
      weatherArea.innerHTML = name;
      weatherTemp.innerHTML += temp + "&#176;C " + nowWeather.main;
    });
};

function handleGeoSucc(position) {
  /* Success Handle */
  const latitude = position.coords.latitude; //위도
  const longitude = position.coords.longitude; //경도
  getWeather(latitude, longitude);
}
function handleGeoErr() {
  /* Error Handle */
  alert("당신의 위치 정보를 알아올 수 없습니다.");
}
function requestCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
}
requestCoords();
