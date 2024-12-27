function updateTime() {
  let nelspruitElement = document.querySelector("#Nelspruit");
  if (nelspruitElement) {
    let nelspruitDateElement = nelspruitElement.querySelector(".date");
    let nelspruitTimeElement = nelspruitElement.querySelector(".time");
    let nelspruitTime = moment().tz("Africa/Johannesburg");

    nelspruitDateElement.innerHTML = nelspruitTime.format("MMMM Do YYYY");
    nelspruitTimeElement.innerHTML = nelspruitTime.format("h:mm:ss");
  }

  let witbankElement = document.querySelector("#witbank");
  if (witbankElement) {
    let witbankDateElement = witbankElement.querySelector(".date");
    let witbankTimeElement = witbankElement.querySelector(".time");
    let witbankTime = moment().tz("Africa/Johannesburg");

    witbankDateElement.innerHTML = witbankTime.format("MMMM Do YYYY");
    witbankTimeElement.innerHTML = witbankTime.format("h:mm:ss");
  }
}

setInterval(updateTime, 1000);
