var timer=60;
var score=0;
var rn=0;
function makeBubble(){
    var clutter="";
        for(var i=1; i<=119; i++){
            var rn= Math.floor(Math.random()*10);
            clutter += `<div class="bubble">${rn}</div>`;
        }

document.querySelector(".pbottom").innerHTML=clutter;

}

function newHit(){
     rn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

function IncScore(){
   score+=10;
   document.querySelector("#newscore").textContent= score;
}

function RunTimer(){
 var timeInt= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#TimeINT").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#pbtm").innerHTML= "Game Over";
        }
    },1000);
}

document.querySelector(".pbottom").addEventListener("click", function(dets){
    var clickednumb= Number(dets.target.textContent);
    if(clickednumb==rn){
        IncScore();
        newHit();
        makeBubble(); 
    }
})

makeBubble();
newHit();
RunTimer();

