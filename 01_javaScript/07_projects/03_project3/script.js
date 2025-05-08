// get the clock
const clock = document.querySelector('#clock');

setInterval(function () {
  // date
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  console.log(date);
}, 1000);
