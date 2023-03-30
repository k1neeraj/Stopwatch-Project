let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;

let timer =  false;

// start button function
function watchStart(){
    timer = true;
    
    stopWatch();
    stopStartWatch();
}

// stop button function
function watchStop(){
    timer = false;
    startWatchAgain()
  
}

// reset button function
function watchReset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milisec = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("milisec").innerHTML = "00";
    stopStartWatch();
}

// main stopwatch function
function stopWatch(){
    if (timer == true){
        milisec = milisec + 1;

        if(milisec == 100){
            sec = sec + 1;
            milisec = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hour = hr;
        let minutes = min;
        let seconds = sec;
        let mili = milisec;

        if(hr < 10){
            hour = "0"+ hour;
        }

        if(min < 10){
            minutes = "0"+ minutes;
        }

        if(sec < 10){
            seconds = "0"+ seconds;
        }

        if(milisec < 10){
            mili = "0"+ mili;
        }

        document.getElementById("hr").innerHTML = hour;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
        document.getElementById("milisec").innerHTML = mili;

        setTimeout("stopWatch()",10);
    }
 
}

// function to disable start button
function stopStartWatch(){
    if(milisec >= 1) {
        document.getElementById("start").disabled = true;
    }
    else if(milisec == 0){
        document.getElementById("start").disabled = false;
    } 
}

// function to enable start button
function startWatchAgain(){
   if(stopWatch.called = true){
    document.getElementById("start").disabled = false;
   }
}
