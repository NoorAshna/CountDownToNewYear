window.onload = function() {
        const dayEl = document.getElementById("days");
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
           
        }
        