
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
 camra=document.getElementById("cam");
Webcam.attach("#camra");
function captureing(){
Webcam.snap(function(data_uri){
document.getElementById("pic").innerHTML="<img  id='snapp' src='"+data_uri+"'>"
});
}
console.log("ml5version",ml5.version);
var machine=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cPaFJ--JH/model.json",modelloaded);
function modelloaded(){
console.log("Hiiiiiiiiiiiiiiiii the model is loaded yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
}