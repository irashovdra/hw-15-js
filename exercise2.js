const temperature = prompt("Введіть температуру");

const weather = {
  temperature: parseInt(temperature),
  humidity: "81%",
  windSpeed: "27 km/h",
  determineTemperature() {
    if (this.temperature < 0) {
      alert("Температура нижче 0 градусів Цельсія");
      return true;
    } else {
      alert("Температура дорівнює 0 або більше 0 градусів Цельсія");
      return false;
    }
  },
};

console.log(weather.determineTemperature());
