let classifier;
let img;
let label = "";
let confidence = "";


function preload() {
  classifier = ml5.imageClassifier("MobileNet");
  img = loadImage("images/snake.jpg");
}

function setup() {
  createCanvas(1000, 1000);
  classifier.classify(img, gotResult);
  image(img, 0,0);
}

function gotResult(results) {
  console.log(results);

  fill(255);
  stroke(0);
  textSize(18);
  label = "Label: " + results[0].label;
  confidence = "Confidence: " + nf(results[0].confidence, 0, 2);
  text(label, 10, 360);
  text(confidence, 10, 380);
}

/*function draw() {
  background(225);
}*/
