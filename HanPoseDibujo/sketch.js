let handPose;
let video;
let hands = [];
let painting;

function preload() {
  handPose = ml5.handPose({flipped: true});
}

//funcion mousePressed para ver datos
function mousePressed (){
  console.log(hands)
}
function setup() {
  createCanvas(640, 480);
  painting = createGraphics (640,480);
  painting.clear();
    // Create the video and hide it
    video = createCapture(VIDEO, {flipped:true});
    video.size(640, 480);
    video.hide();
      // Start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}

function draw() {
  image(video, 0, 0, width, height);
  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      //let keypoint = hand.keypoints[j];
      let index = hand.keypoints[16];
      fill(0, 255, 0);
      noStroke();
      //circle(keypoint.x, keypoint.y, 10);
      painting.fill(200, 0, 180);
      painting.noStroke();
      painting.circle(index.x, index.y,5,5);
    }
  }
  image(painting,0,0);
}

