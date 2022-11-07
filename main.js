//@ts-nocheck
statusa = "";
let objects = [];
function gotResult(results) {
	objects = results;
}
function setup() {
	canvas = createCanvas(500, 450);
	video = createCapture(VIDEO);
	canvas.parent("canvas");
	video.hide();
}
function draw() {
	image(video, 0, 0);
	if(statusa==true){
		objects.forEach((value)=>{
			percent = value.confidence * 100;

		});
	}
}
function start() {
	const objectDetector = ml5.objectDetector("cocossd", {}, modelLoaded);
	objectValue = document.querySelector("#Object-to-find").value;
	document.querySelector("#objects").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
	console.log("Model Loaded");
}
