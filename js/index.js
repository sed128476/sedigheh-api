const apiKey = "303cc71b96fbe5ad2afad3b89b585cf6";
      const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");

      const weatherImg = document.querySelector(".weather-img");

      async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
          document.querySelector(".location-not-found").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        }else{
          var data = await response.json();

          console.log(data);

          document.querySelector(".city").innerHTML = data.name;
          document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
          document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
          document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

          //img
          if(data.weather[0].main == "Mist"){
            weatherImg.src = "img/mist.png";
          }else if(data.weather[0].main == "Rain"){
            weatherImg.src = "img/rain.png";
          }else if(data.weather[0].main == "Clouds"){
            weatherImg.src = "img/clouds.png";
          }else if(data.weather[0].main == "Clear"){
            weatherImg.src = "img/clear.png";
          }else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "img/drizzle.png";
          }

          document.querySelector(".weather").style.display = "block";
          document.querySelector(".location-not-found").style.display = "none";
        }


      }


      searchBtn.addEventListener("click" , ()=>{
        checkWeather(searchBox.value);
      })

