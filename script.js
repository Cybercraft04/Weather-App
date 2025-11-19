const apiKey = "446f1848e0252d064b4141b48e6013a8";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.getElementById("cloud");

        async function checkWeather(city){
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            var data = await response.json();
            

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr"; 

            const weatherIcon = document.getElementById("cloud");

if (data.weather[0].main === "Clouds") {
  weatherIcon.className = "fa-solid fa-cloud"; 
  weatherIcon.style.color = "#333";
} else if (data.weather[0].main === "Clear") {
  weatherIcon.className = "fa-solid fa-sun"; 
  weatherIcon.style.color = "#facc15";
} else if (data.weather[0].main === "Rain") {
  weatherIcon.className = "fa-solid fa-cloud-showers-heavy"; 
  weatherIcon.style.color = "#fff";
} else if (data.weather[0].main === "Snow") {
  weatherIcon.className = "fa-solid fa-snowflake"; 
} else if (data.weather[0].main === "Thunderstorm") {
  weatherIcon.className = "fa-solid fa-bolt"; 
} else {
  weatherIcon.className = "fa-solid fa-smog"; 
}
   
    document.querySelector(".weather").style.display = "block";

        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })
        
