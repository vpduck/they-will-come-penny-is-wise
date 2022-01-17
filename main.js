noX=0;
noY=0;

function preload() { 
    clown=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
 function setup() {
     canvas = createCanvas(300, 300);
     canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);
 }

 function modelLoaded() {
console.log("PoseNet is Initialized");
 }

function gotPoses(results) {
    if(results.length>0)
    {
        noX=results[0].pose.nose.x-15;
        noY=results[0].pose.nose.y-15;
    }
} 

 function draw() {
image(video,0,0,300,300);
image(clown,noX,noY,40,30);
 }

 function take_snapshot(){
     save('myFilterImage.png');
 }
 