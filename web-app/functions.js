// khoi tao cac thong so
let btn1 = document.querySelector("#btn1");
let img = document.querySelector(".fan_on");
let btn2 = document.querySelector("#btn2");

// functions nut bam
btn1.addEventListener("click", () => {
  img.src = "img/fan_running.png";
});

btn2.addEventListener("click", () => {
  img.src = "img/fan_off.png";
});
// Function Digital Clock
function updateClock() {
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  // Month and day names
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Determine AM/PM and adjust the hour for 12-hour format
  if (hou === 0) {
    hou = 12;
  } else if (hou > 12) {
    hou -= 12;
    pe = "PM";
  } else if (hou === 12) {
    pe = "PM";
  }

  // Add leading zeros to minutes and seconds
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // IDs in your HTML structure
  var ids = [
    "datename",
    "month",
    "daynum",
    "year",
    "hours",
    "minutes",
    "seconds",
    "period",
  ];
  var values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];

  // Update each element if it exists
  for (var i = 0; i < ids.length; i++) {
    var element = document.getElementById(ids[i]);
    if (element) {
      element.textContent = values[i];
    }
  }
}

function initClock() {
  updateClock();
  window.setInterval(updateClock, 1000);
}

//Function Analog Clock
const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function clockTick() {
  const date = new Date();
  const seconds = date.getSeconds() / 60;
  const minutes = (seconds + date.getMinutes()) / 60;
  const hours = (minutes + date.getHours()) / 12;

  rotateClockHand(secondHand, seconds);
  rotateClockHand(minuteHand, minutes);
  rotateClockHand(hourHand, hours);
}

function rotateClockHand(element, rotation) {
  element.style.setProperty("--rotate", rotation * 360);
}

setInterval(clockTick, 1000);
