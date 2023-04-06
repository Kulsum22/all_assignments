let date = document.getElementById("date")
let time = document.getElementById("time")
function setTime(){

    let hours = new Date().getHours()
    let  minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    
    let day = new Date().getDate() 
    let month = new Date().getMonth() +1
    let year = new Date().getFullYear()
    
    let ampm = hours >= 12 ? "PM" : "AM"

    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
       minutes= "0" + minutes
    }
    if(seconds < 10){
        seconds = "0" + seconds
    }
    if(day < 10){
        day = "0" + day
    }

    if(month < 10){
        month = "0" + month
    }
    let currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm
    let currentDate = day + "/" + month + "/" +year

    time.textContent = currentTime
    date.textContent = currentDate
}
setInterval(setTime,1000)
setTime()
 
