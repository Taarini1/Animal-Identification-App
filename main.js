function initialize(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/M4tjnCXV3/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded")
    classifier.classify(gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
    }
}