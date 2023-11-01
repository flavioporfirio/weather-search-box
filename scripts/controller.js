import boxView from "./boxView";
import * as model from "./model";

const input = document.querySelector("input");

const controlCountryWeather = async function () {
  try {
    await model.searchWord(input.value);
    input.value = "";

    boxView.render(model.state.search);

    console.log(model.state.search);
  } catch (err) {
    boxView.errorMessage();
  }
};

const init = function () {
  boxView.handlerSearchButton(controlCountryWeather);
};

init();
