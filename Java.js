let span = document.querySelectorAll(".H");
let span2 = document.querySelectorAll(".M");
let date = document.querySelectorAll(".date");


function myFunc(){
 
    let myDate= new Date();
    let hr,min= (myDate.getMinutes()< 10 ) ? "0 " + myDate.getMinutes():myDate.getMinutes(),
    sec =(myDate.getSeconds()<10)?"0" + myDate.getMinutes():myDate.getMinutes(),
    M= (myDate.getHours()>=12)? "PM" :"AM";

    if(myDate.getHours()===0){

        hr=12;

    }else if(myDate.getHours()>12){
        hr= myDate.getHours() -12;

    }else{
        hr= myDate.getHours();
    }

    var currenTime= hr + ":" + min + ":" + sec;
    span[0].innerHTML=currenTime;

    span2[0].innerHTML= M;

    let myDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let myMonth=["January","February","March","April","May","June","july","Augost","September","November","December "];
    let day=myDate.getDate();
    let currenDate=myDay[myDate.getDay()] +  "," + myMonth[myDate.getMonth()] + day;
    date[0].innerHTML=currenDate;


}
myFunc();
setInterval(function(){
    myFunc();


},1000);