const Week = [ "الاحد" , "الاثنين" , "الثلاثاء" , "الاريعاء" , "الخميس" , "الجمعه" , "السبت" ];
    
function updaeTime (){
    let now = new Date();

    document.getElementById("time").innerText = 
         zeroPadding(now.getHours() , 2) + ":" +
         zeroPadding(now.getMinutes() , 2) + ":" +
         zeroPadding(now.getSeconds() , 2) ;

    document.getElementById("date").innerText = 
    now.getFullYear() + "-" +
         zeroPadding(now.getMonth()+1 , 1 , 2) + "-" +
         zeroPadding(now.getDate(), 2) + " " +
         Week[now.getDay()];

}

updaeTime();
setInterval(updaeTime, 1000);

function zeroPadding(num , digit){
    return String(num).padStart(digit , '0');
}