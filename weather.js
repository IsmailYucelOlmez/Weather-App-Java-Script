const input=document.querySelector("#city-input");
const weatherIcon=document.querySelector("#weather-icon");

const apiKey="1b298430a4983ecbe62a5f8e27108866";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

checkWeather=(city)=>{

   fetch(apiUrl + city +`&appid=${apiKey}`)
   .then((response) => response.json())
   .then((data) => {

    document.querySelector("#weather-text").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector("#city-text").innerHTML=data.name;
    document.querySelector(".wind-text").innerHTML=data.wind.speed +"km/h";
    document.querySelector(".humidity-text").innerHTML=data.main.humidity +"%";      

    if(data.weather[0].description=="broken clouds"){

        weatherIcon.src="./images/clouds.png"

    }else if(data.weather[0].description=="Clear"){

        weatherIcon.src="./images/clear.png"

    }else if(data.weather[0].description=="Rain"){

        weatherIcon.src="./images/rain.png"

    }else if(data.weather[0].description==""){

        weatherIcon.src="./images/snow.png"

    }else if(data.weather[0].description=="Mist"){

        weatherIcon.src="./images/mist.png"

    }else if(data.weather[0].description=="Drizzle"){

        weatherIcon.src="./images/drizzle.png"

    }

   });
    
} 

document.querySelector(".search-icon-field").addEventListener("click",() =>{
    checkWeather(input.value);
   
});

let defaultLocation="Aksaray"
window.addEventListener("load",() =>{
    checkWeather(defaultLocation);

});