import './App.css';
import './clock'
function App(props) {
  return (
    <div className="body">
    <h1>CountDown To New Year</h1>
    <div className="countdown-c">
        <div className="count days-c">
            <p className="big" id="days">{props.day}</p>
            <span>Days</span>
        </div>
        <div className="count hours-c">
            <p className="big" id="hours">{props.hour}</p>
            <span>Hours</span>
        </div>
        <div className="count minutes-c">
            <p className="big" id="minutes">{props.minutes}</p>
            <span>Minutes</span>
        </div>
        <div  className="count seconds-c">
            <p className="big" id="seconds">{props.seconds}</p>
            <span>Seconds</span>
        </div>
    </div>
    
    <script src="script.js"></script>
   
</div>

  );
}


export default App;
