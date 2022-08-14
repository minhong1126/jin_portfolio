//슬라이드 사진
var img = document.getElementsByClassName("sld_img");

//슬라이드 화살표
var sld_prev = document.getElementsByClassName("sld_prev");
var sld_next = document.getElementsByClassName("sld_next");

var i = 0;
sld_prev.onclick(function(){
    i = (i - 1) % 3 + 3;
    for(j = 0; j < 3; j++){
        if(j == i){
            img[j].style.visibilty = "visible";
        }
        else{
            img[j].style.visibilty = "invisible";
        }
    }
})