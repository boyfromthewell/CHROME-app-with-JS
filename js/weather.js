const apiKey = "978c2d6b5069ea14f9d9e3e3102bb8cd"

function onGeo(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {
            const weather = document.querySelector("#weather");
            const city = document.querySelector("#location");
            city.innerText = "🚩location : " + data.name;
            weather.innerText = `${"Weather : " + data.weather[0].main} / ${"Temperature : " + Math.round(data.main.temp) + " °C"}`
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoError);