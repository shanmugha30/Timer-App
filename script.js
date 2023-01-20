
days=document.getElementById('days')
hours=document.getElementById('hours')
minutes=document.getElementById('minutes')
seconds=document.getElementById('seconds')
var numMillisec=1000*60*60*24;

function CalculateTimer(){
    var presentDate=new Date();
    var newYear=new Date("12-29-2022");
    var numDays=Math.round((newYear-presentDate)/numMillisec);
    var numHours=Math.round(((newYear-presentDate)/(1000*60*60))%60);
    var numMinutes=Math.round(((newYear-presentDate)/(1000*60))%60);
    var numSeconds=Math.round(((newYear-presentDate)/(1000))%60);
    
    days.innerHTML=checkZero(numDays);
    hours.innerHTML=checkZero(numHours);
    minutes.innerHTML=checkZero(numMinutes);
    seconds.innerHTML=checkZero(numSeconds);
}

function checkZero(num){
    if(num < 10 && num >= 0){
        return `0${num}`;
    }
    else{
        return num;
    }
}

setInterval(CalculateTimer,1000)