const apiKey = "32d39755b208a9324743d8b9f0943e37";

function getWeather() {
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "⚠ Please enter a city name";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                result.innerHTML = "❌ City not found";
                return;
            }

            result.innerHTML = `
                <h3>${data.name}</h3>
                <p>🌡 Temp: ${data.main.temp} °C</p>
                <p>☁ Weather: ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
            `;
        })
        .catch(() => {
            result.innerHTML = "⚠ Error fetching data";
        });
}
