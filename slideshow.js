var current=0;
Show_Slide(current);
function Show_Slide(n){
    var slides = document.querySelectorAll("#slides>img");
    for(let i=0;<slides.length;i++){
        slides[i].style.display="none";
    }
    current++;
    if(current>slides.length){
        current=1;
    }
    slides[current-1].style.display="block";
    setTimeout(Show_Slide,3000);
}
