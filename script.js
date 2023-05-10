// Q1
function show(){

    let head = document.createElement('h1')
    head.innerHTML= "Mern Stack";
    document.getElementById('head1').appendChild(head);
}

// Q2
function show2(){

    const head3 = document.getElementsByTagName('h1')[0]
    head3.style.fontSize = "40px"

    const head4 = document.getElementsByTagName('h1')[3]
    head4.style.color = 'yellow'
}

// Q3
function clock(){
    var date = new Date().toLocaleTimeString()
    document.getElementById('time').innerText=date;
}
setInterval(clock,1000)





function diaplayTime() {
        // console.log("JavaScript is Live");
        var dateTime = new Date();
        var hrs = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();
      
        var session = document.getElementById('sessions');
      
          if(hrs >= 12)
          {
            session.innerHTML = 'PM';
          }
          else
          {
            session.innerHTML = 'AM';
          }   
        
        // kkkkk
          if (hrs>12) {
            hrs -= 12;
          PMAM = "pm";
        }
      
        if (hrs < 10) {
          hrs = "0" + hrs;
        }
      
        if (min < 10) {
          min = "0" + min;
        }
      
        if (sec < 10) {
          sec = "0" + sec;
        }
      
      
        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        
        
      }
      
      setInterval(diaplayTime, 1000); 

function diaplayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
  
    var session = document.getElementById('sessions');
  
      if(hrs >= 12)
      {
        session.innerHTML = 'PM';
      }
      else
      {
        session.innerHTML = 'AM';
      }   
    
    // kkkkk
      if (hrs>12) {
        hrs -= 12;
      PMAM = "pm";
    }
  
    if (hrs < 10) {
      hrs = "0" + hrs;
    }
  
    if (min < 10) {
      min = "0" + min;
    }
  
    if (sec < 10) {
      sec = "0" + sec;
    }
  
  
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    
    
  }
  
  setInterval(diaplayTime, 1000); 


  // Q4
  let up = 0;
  function change1(){
    if(up === 0){
      mark.innerText = "Welcome to Elevation Academy"
      count++;
    }
    else{
      mark.innerText = "Hello World"
    }
  }
  
  // Q4
  let count = 0 ;
  function hide(){
    if(count === 0){

      hello1.style.display ="none";
      count++
    }
    else{
      hello1.style.display ="block";
      count--;
    }
  }