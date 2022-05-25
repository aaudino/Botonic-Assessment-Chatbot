let inTime = true;
let timerInterval;

const timer = (minutes) => {
  //remove the Timer DIV if it exists
  if (document.getElementById(`timer`)) {
    document.getElementById(`timer`).remove();
  }
  // Define the starting minutes
  const startingMinutes = minutes;
  let time = startingMinutes * 60;
  //create the Timer Div element
  const body = document.body;
  let timerdiv = document.createElement(`div`);
  timerdiv.setAttribute("id", "timer");
  timerdiv.style.borderRadius = `24px`;
  timerdiv.style.backgroundColor = `#90e0ef`;
  body.insertAdjacentElement("afterbegin", timerdiv);
  // Define the countdown
  let countdown = () => {
    const dispMinutes = Math.floor(time / 60);
    let dispSeconds = time % 60;
    dispSeconds < 10
      ? (timerdiv.innerHTML = `<h1 style ="color:white;text-align:center;font-size:5rem">${dispMinutes}:0${dispSeconds}</h1>`)
      : (timerdiv.innerHTML = `<h1 style ="color:white;text-align:center;font-size:5rem">${dispMinutes}:${dispSeconds}</h1>`);
    time--;
    // Stop the countdown if the time is up to avoid minues seconds
    if (time < 0) {
      clearInterval(timerInterval);
      inTime = false;
    }
  };

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  //Rerun the function every second
  timerInterval = setInterval(countdown, 1000);
};
export { timerInterval, inTime, timer };
