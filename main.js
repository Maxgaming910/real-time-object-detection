img="";
object = [];
status="";
 function preload(){
    img = loadImage('dog_cat.jpg');
 }

 function setup(){
    canvas= createCanvas(380, 380);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    
    objectDetector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("Status").innerHTML="status = detecting objects";
}
function modelloaded(){
    console.log("modelloaded!");
        status=true; 
        
}
function gotResult(error,results){
    if(error){
        console.log(error);
        

    }
    console.log(results);
    object = results;
}

function draw(){
    image(video, 0, 0, 380, 380);
    
    if(status != ""){
        objectDetector.detect(video, gotResult);
        r = random(255);
        g = random(255);
        b = random(255);
        for(i=0; i < object.length; i++){

            document.getElementById("Status").innnerHTML = "status: object Detected";
            document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+ object.length;
             fill(r,g,b);
             percent= floor(object[i].confidence *100);
             text(object[i].label+""+ percent+"%", object[i].x+15, object[i].y+15);
             noFill();
             stroke(r,g,b);
             rect(object[i].x, object[i].y, object[i].width, object[i].height);

        }
    }

    
}


