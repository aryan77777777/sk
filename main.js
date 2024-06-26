function setup(){
canvas=createCanvas(370,330);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}
function clearCanvas(){
    background("dark green");
}
function preload(){
classifier= ml5.imageclassifier("DoodleNet");
}
function draw() { strokeWeight(10); stroke(0); if (mouseIsPressed) { line(pmouseX, pmouseY, mouseX, mouseY); } }
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    }
console.log(results);
document.getElementById('label').innerHTML = 'Label: ' +
results[0].label;

document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}



