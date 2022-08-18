//미완성 알림
alert("아직 미완성입니다!");

//슬라이드 사진
var img = document.getElementsByClassName("sld_img");
var curr_img = img[0];

//슬라이드 화살표
var sld_prev = document.getElementsByClassName("sld_prev");
var sld_next = document.getElementsByClassName("sld_next");

var i = 0;
sld_prev.onclick = function(){
    i = (i - 1) % 3 + 3;
    for(j = 0; j < 3; j++){
        if(j == i){
            img[j].style.display = "block";
        }
        else{
            img[j].style.visibilty = "none";
        }
    }
};