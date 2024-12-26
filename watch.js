function updateTime() {
  let NelspruitElement = document.querySelector("#Nelspruit");
  if (losAngelesElement) {
    let NelspruitDateElement = Nelspruit.querySelector(".date");
    let NelspruitTimeElement = NelspruitElement.querySelector(".time");
    let NelspruitTime = moment().tz("Africa/Johannesburg");

    NelspruitDateElement.innerHTML = NelspruitTime.format("MMMM	Do YYYY");
    NelspruitTimeElement.innerHTML = NelspruitTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let witbankElement = document.querySelector("#witbamk");
  if (parisElement) {
    let witbankDateElement = witbankElement.querySelector(".date");
    let witbankTimeElement = witbankElement.querySelector(".time");
    let witbankTime = moment().tz("Africa/Johannesburg");

    parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
