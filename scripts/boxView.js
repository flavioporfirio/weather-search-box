import icons from "../imgs/icons.svg";

class BoxView {
  _parentElement = document.querySelector(".search-result");
  _data;
  _errorMessage = "Couldn't find a city, try again!";

  render(data) {
    this._data = data;
    console.log(this._data.currWeather);
    const markup = this._renderBoxMarkup();

    this._clean();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clean() {
    this._parentElement.innerHTML = "";
  }

  errorMessage(message = this._errorMessage) {
    this._clean();
    this._parentElement.innerHTML = `
      <div class="error-message">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>${message}</p>
      </div>
    `;
    // this._parentElement.innerHTML = ` <img src="imgs/404.png" alt="couldn't load country forecast - image error" />`;
  }

  handlerSearchButton(handler) {
    document
      .querySelector(".btn-search")
      .addEventListener("click", function () {
        handler();
      });

    document.body.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        handler();
      }
    });
  }

  _renderBoxMarkup() {
    return `
      <div class="curr-weather">
      <img src="https://openweathermap.org/img/wn/${this._data.icon}@2x.png" alt="" />
        <div class="curr-temp">
          <p>${this._data.temperature}<span>℃</span></p>
          <p>${this._data.weatherDescription}</p>
        </div>
      </div>
      <div class="curr-statistic">
        <div class="humidity">
          <i class="fa-solid fa-water"></i>
        <div class="curr-humidity">
        <p>${this._data.humidity}%</p>
        <p>Humidity</p>
      </div>
      </div>
      <div class="wind-speed">
        <i class="fa-solid fa-wind"></i>
        <div class="curr-wind">
          <p>${this._data.windSpeed}Km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
    `;
  }
}

export default new BoxView();
