const newYears= "13 april 2024";

const days=document.getElementById('day');
const hours=document.getElementById('hour');
const minute=document.getElementById('mins');
const second=document.getElementById('secs');

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalseconds= (newYearsDate - currentDate) / 1000;

  const day= Math.floor(totalseconds/ 3600 / 24);
  const hour= Math.floor(totalseconds/3600) %24 ;
  const minutes = Math.floor(totalseconds/60) %60;
  const sec= Math.floor(totalseconds) %60;

  days.innerHTML = day;
  hours.innerHTML = hour;
  minute.innerHTML = minutes;
  second.innerHTML = sec;
}

countdown();

setInterval(countdown, 1000);
