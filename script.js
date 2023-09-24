
const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secsEL = document.getElementById('secs');



//SET THE DATE FOR THE NEW YEAR
const newYears = "1 jan 2024";

//FUNCTION TO GET THE CURRENT DATE
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

  // SUNTRACT THE NEW YEAR DATE FROM THE CURRENT DATE
    const totalseconds = new Date( newYearsDate - currentDate) / 1000 ;
    

    //CONVERT THE TIME REMAINNIG TO days, min and seconds
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds/ 3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(minutes);
    secsEL.innerHTML = formatTime(seconds);
   }

   function formatTime(time) {
    return time <10 ? `0${time}` : time;
   }

setInterval(countdown,1000)

countdown();