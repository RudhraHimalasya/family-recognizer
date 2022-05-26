Webcam.attach('#camera');
 camera = document.getElementById("camera"); 
 Webcam.set(
   { width:350,
     height:300, 
     image_format : 'png'
     , png_quality:90 })
   ;


function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log()
// classifier = ml5.imageClassifier('',modelLoaded);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Tmv2eI59f/model.json', modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  