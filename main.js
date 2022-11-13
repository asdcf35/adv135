//@ts-nocheck
statusa = "";
let ojects = [];
function gotResult(results) {
	console.log(results);
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
	objectValue = document.querySelector("#Object-to-find").value;
	if (statusa == true) {
	objectDetector.detect(video, gotResult);
		for (let i = 0; i < objects?.length; i++) {
			colorVariable = "#ff0000";
			$("#status").textContent = "Status: Object Detected";
			if (objects[i] == document.querySelector("#Object-to-find").value) {
				colorVariable = "#FABD2F";
			}
			fill(colorVariable);
			let percent = floor(objects[i].confidence * 100);
			text(
				`${objects[i].label} ${percent}%`,
				objects[i].x + 15,
				objects[i].y + 15
			);
			noFill();
			stroke(colorVariable);
			rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
		}
	}
}
function start() {
	globalThis.objectDetector = ml5.objectDetector("cocossd", modelLoaded);
	document.querySelector("#objects").innerHTML = "Status: Detecting Objects";
	statusa = true;
}

function modelLoaded() {
	console.log("Model Loaded");
}
