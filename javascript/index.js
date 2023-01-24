function updateTime() {
    
  // New Dehli
  let newDehliElement = document.querySelector("#new-dehli");
  if (newDehliElement) {
    let newDehliDateElement = newDehliElement.querySelector(".date");
    let newDehliTimeElement = newDehliElement.querySelector(".time");
    let newDehliTime = moment().tz("Asia/Dili");

    newDehliDateElement.innerHTML = newDehliTime.format("MMMM Do YYYY");
    newDehliTimeElement.innerHTML = newDehliTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Rome
  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDateElement = romeElement.querySelector(".date");
    let romeTimeElement = romeElement.querySelector(".time");
    let romeTime = moment().tz("Europe/Rome");

    romeDateElement.innerHTML = romeTime.format("MMMM Do YYYY");
    romeTimeElement.innerHTML = romeTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoDateElement = torontoElement.querySelector(".date");
    let torontoTimeElement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDateElement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimeElement.innerHTML = torontoTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Jakutsk
   let jakutskElement = document.querySelector("#jakutsk");
   if (jakutskElement) {
     let jakutskDateElement = jakutskElement.querySelector(".date");
     let jakutskTimeElement = jakutskElement.querySelector(".time");
     let jakutskTime = moment().tz("Asia/Yakutsk");

     jakutskDateElement.innerHTML = jakutskTime.format("MMMM Do YYYY");
     jakutskTimeElement.innerHTML = jakutskTime.format(
       "h:mm:ss [<small>]A[</small>]"
     );
   }
   let londonElement = document.querySelector("#london");
   if (londonElement) {
     let londonDateElement = londonElement.querySelector(".date");
     let londonTimeElement = londonElement.querySelector(".time");
     let londonTime = moment().tz("Europe/London");

     londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
     londonTimeElement.innerHTML = londonTime.format(
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
