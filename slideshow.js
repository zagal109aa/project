var slides = document.querySelectorAll("#slides>img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current=0;
Show_Slide(current);
prev.onclick=Prev_Slide;
next.onclick=Next_Slide;

function Show_Slide(n){
    for (var i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[n].style.display="block";
}

function Prev_Slide(){
    if(current>0) current-=1;
    else current=slides.length -1;
    Show_Slide(current);
}

function Next_Slide(){
    if(current<slide.length-1) current+=1;
    else current=0;
    Show_Slide(current);
}