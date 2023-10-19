function loco(){

}loco();
var main=document.querySelector("#main");
var image=document.querySelector("#page>img");
var img=document.querySelector("#page3>#hand");
main.addEventListener("mousemove",function(dets){
    image.style.top = 1-dets.y*0.05 + "px"
    image.style.left = 1-dets.x*0.05 + "px"
    img.style.top = 1-dets.y*0.02 + "px"
})