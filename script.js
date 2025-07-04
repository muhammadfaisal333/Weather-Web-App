// const apikey = "c1c360ba6a7293e3f56c4770527eaa38"
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=London"
// const response = await fetch(apiurl + `&appid=${apikey}`);


const searchField = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImage = document.querySelector(".weather_icon")
const cityError = document.querySelector(".cityNotFound")
const weather = document.querySelector(".weather")
const mainScreenImg = document.querySelector(".mainScreenImg")

searchBtn.addEventListener("click", ()=> {

    const city = searchField.value.trim()
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1c360ba6a7293e3f56c4770527eaa38&units=metric`

    async function weatherDetails() {
        const response = await fetch(api)

        if(response.status === 404) {
            cityError.style.display = "block"
            weather.style.display = "none"
        }
        else {
            let data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

                    //update image 
            if(data.weather[0].main == "Clear") {
                weatherImage.src = "images/clear.png"
            } 
            else if (data.weather[0].main == "Clouds") {
                weatherImage.src = "images/clouds.png"
            }
            else if (data.weather[0].main == "Rain") {
                weatherImage.src = "images/rain.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherImage.src = "images/drizzle.png"
            }
            else if (data.weather[0].main == "Mist") {
                weatherImage.src = "images/mist.png"
            }
            else if (data.weather[0].main == "Snow") {
                weatherImage.src = "images/snow.png"
            }
            weather.style.display = "block"
            mainScreenImg.style.display = "none"
        }
    }
    weatherDetails()
        
})



