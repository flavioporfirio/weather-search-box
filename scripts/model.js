export const state = {
  search: {},
};

export const searchWord = async function (city) {
  try {
    if (!city) throw new Error("City not found, try again!");

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0049f487e630ae079b30f58c23256fd8`
    );
    const data = await res.json();
    console.log(data);
    state.search = {
      humidity: data.main.humidity,
      temperature: data.main.temp,
      currWeather: data.weather[0].main,
      weatherDescription: data.weather[0].description,
      windSpeed: data.wind.speed,
      icon: data.weather[0].icon,
    };

    if (!res.ok) throw new Error(`City not found - ${res.status}`);
  } catch (err) {
    throw err;
  }
};
