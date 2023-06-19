var canvas;
var video;
var cor;
function preload(){

}
function setup(){
canvas=createCanvas(640, 440);
canvas.position(110, 250);
video=createCapture(VIDEO);
video.hide();
cor="";
}
function draw(){
    image(video, 0, 0, 640, 440);
    tint(cor);
}
function aplicar_filtro(){
    document.getElementById("cor").value; 
}
function tirar_foto(){
    save("foto_capturada.jpg"); 
}