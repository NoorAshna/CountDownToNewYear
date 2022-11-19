import logo from './logo.svg';
import './App.css';

function App() {
  const dayEl = document.getElementById("days")
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const newYear = "1 Jan 2023";
function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    dayEl.innerHTML = formateTime(days);
    hourEl.innerHTML = formateTime(hours);
    minuteEl.innerHTML = formateTime(minutes);
    secondEl.innerHTML = formateTime(seconds);
}
function formateTime(time){
    return time < 10 ? `0${time}` : time;}
countdown();
setInterval(countdown, 1000);

  return (
    <div class="body">
    <h1>CountDown To New Year</h1>
    <div class="countdown-c">
        <div class="count days-c">
            <p class="big" id="days">0</p>
            <span>Days</span>
        </div>
        <div class="count hours-c">
            <p class="big" id="hours">0</p>
            <span>Hours</span>
        </div>
        <div class="count minutes-c">
            <p class="big" id="minutes">0</p>
            <span>Minutes</span>
        </div>
        <div class="count seconds-c">
            <p class="big" id="seconds">0</p>
            <span>Seconds</span>
        </div>
    </div>
    
    <script src="script.js"></script>
</div>
  );
  
      

}

export default App;
