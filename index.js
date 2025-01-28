let userinp = document.querySelector("#city-input");
let cityName = document.querySelector("#city-name");
let place = document.querySelector("#location");
let humidity = document.querySelector("#humidity");
let pressure = document.querySelector("#pressure");
let windspeed = document.querySelector("#wind-speed");
let temp = document.querySelector("#temp");
let feel = document.querySelector("#feel");

let getData = async (data) => {
  let promise = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=c96f9250b3cb403da06155302241512&q=${data}&aqi=yes`
  );
  return await promise.json();
};

let displayWeather = async () => {
  try {
    let value = userinp.value;
    let result = await getData(value);
    console.log(result);

    cityName.innerHTML = `${result.location.name}, ${result.location.region}`;
    place.innerHTML = `${result.location.country}, ${result.location.name}`;
    temp.innerHTML = `${result.current.temp_c}°C`;
    humidity.innerHTML = `${result.current.humidity}%`;
    pressure.innerHTML = `${result.current.pressure_mb} hPa`;
    windspeed.innerHTML = `${result.current.wind_kph} km/h`;
    feel.innerHTML = `${result.current.feelslike_c}°C`;
  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The location is not found!",
    });
  }
};
