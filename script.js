let intertvalId;
document.getElementById("h1").addEventListener('click',() => {
   intervalId = setInterval(func,350)
});

 function func() {
    if(true){
const rand =Math.floor(Math.random() * 4);
    
   if(rand==0){
    document.getElementById("h1").innerHTML = "LETS";
    const head = document.querySelector('#h1');
head.className = "bg1";
   }
   else if(rand==1){
    document.getElementById("h1").innerHTML = "ROCK";
    const head = document.querySelector('#h1');

    head.className = "bg2"

   }
   else if(rand ==3){
    document.getElementById("h1").innerHTML = "HIT HARD";
    const head = document.querySelector('#h1');

    head.className = "bg3"

   }
   else{
    const head = document.querySelector('#h1');

    document.getElementById("h1").innerHTML = "DANCE";
    head.className = "bg4"

   }}
   }




