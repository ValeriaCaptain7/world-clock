setInterval(function () {

// New Dehli //
let newDehliElement = document.querySelector("#new-dehli");
let newDehliDateElement = newDehliElement.querySelector(".date");
let newDehliTimeElement = newDehliElement.querySelector(".time");
let newDehliTime = moment().tz("Asia/Colombo");

newDehliDateElement.innerHTML = newDehliTime.format("dddd, MMM Do YYYY");
newDehliTimeElement.innerHTML = newDehliTime.format("hh:mm:ss [<small>]A[</small>]");    
}, 1000);


setInterval(function () {

// Rome //
let romeElement = document.querySelector("#rome");
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");

romeDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
romeTimeElement.innerHTML = romeTime.format(
  "hh:mm:ss [<small>]A[</small>]");    
}, 1000);

setInterval(function() {
// Toronto //
let torontoElement = document.querySelector("#toronto");
let torontoDateElement = torontoElement.querySelector(".date");
let torontoTimeElement = torontoElement.querySelector(".time");
let torontoTime = moment().tz("America/Toronto");

torontoDateElement.innerHTML = moment().format("dddd, MMMM Do YYYY");
torontoTimeElement.innerHTML = torontoTime.format("hh:mm:ss [<small>]A[</small>]");    
}, 1000);
