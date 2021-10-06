let timeNow = () =>{
    let showTime = document.getElementById("DisplayTime");
    let showDate = document.getElementById("DisplayDate");
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let date = time.getDate();
    let day = time.getDay();
    let month = time.getMonth();
    let year = time.getFullYear();
    let Currentdate;
    let CurrentTime;
    const WeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MonthsInYear = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if(hours < 10){
        hours = "0"+hours;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(seconds < 10){
        seconds = "0"+seconds;
    }
    CurrentTime = hours+":"+minutes+":"+seconds;
    showTime.innerHTML=CurrentTime;
    Currentdate = WeekDays[day]+", "+MonthsInYear[month]+" "+date+", "+year;
    showDate.innerHTML=Currentdate;
}
setInterval(timeNow,1000);
timeNow();