function displayCurrentDateTime() {
  const now = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[now.getDay()];

  const months = [
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
  const month = months[now.getMonth()];

  const date = now.getDate();
  const year = now.getFullYear();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  // const seconds = now.getSeconds().toString().padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  const currentDate = `${month} ${date}, ${year}`;

  document.getElementById("currentDay").textContent = day;
  document.getElementById("currentDate").textContent = currentDate;
  document.getElementById("currentTime").textContent = currentTime;
}

setInterval(displayCurrentDateTime, 1000);
