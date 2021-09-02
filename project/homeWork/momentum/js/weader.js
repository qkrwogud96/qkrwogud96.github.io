const success = (position) => {
  const latitude = position.coords.latitude; //위도
  const longitude = position.coords.longitude; //경도
  const API_KEY = "cdae6f6e0f0ea44b1e4c7cf708a01ffb";
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(URL).then( (response) =>{
        return response.json();
    }).then( (data)=>{
        console.log(data.name, data.main.temp, data.weather[0].main);
        console.log(data.clouds.all + '%');
    });
};
const error = () => {
  alert("당신의 위치 정보를 알아올 수 없습니다.");
};
navigator.geolocation.getCurrentPosition(success, error);
