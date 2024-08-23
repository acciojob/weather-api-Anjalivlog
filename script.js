//your JS code here. If required.
function getWeather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=27668eb3d23f0d2ee32008dcf1fba594')
    .then(response => response.json())
    .then(data => {
        let weather = data['weather'][0]['description'];
        document.getElementById('weatherData').innerHTML = 'Current weather in London: ' + weather;
    })
    .catch(error => console.error('Error:', error));
}