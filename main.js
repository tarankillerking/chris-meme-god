var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start() {
   document.getElementById("textbox").innerHTML=""
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
var content=event.results[0][0].transcript
document.getElementById("textbox").innerHTML=content
console.log(content)
speak()
}
function speak(){
    var synth=window.speechSynthesis
 speakdata=document.getElementById("textbox").innerHTML  
 var utter_this= new SpeechSynthesisUtterance(speakdata)
 synth.speak(utter_this)
 Webcam.attach(camera)
}
camera=document.getElementById("camera")
Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:90
})