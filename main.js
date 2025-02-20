function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Od8fwIYSo/", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img= document.getElementById('policia1')
        img2=document.getElementById('ambulancia2')
        img3=document.getElementById('bomberos3')
        img4=document.getElementById('proteccion civil4')

        if(results[0].label=="policia"){
            img.src='policia-01.gif';
            img2.src= 'ambulancia-02.png';
            img3.src= 'bomberos-03.png';
            img4.src= 'proteccion civil-04.png';
        }else if(results[0].label=="ruido de fondo"){
            img.src='policia-01.png';
            img2.src= 'ambulancia-02.png';
            img3.src= 'bomberos-03.png';
            img4.src= 'proteccion civil-04.png';
        }else if(results[0].label=="ambulancia"){
            img.src='policia-01.png';
            img2.src= 'ambulancia-02.gif';
            img3.src= 'bomberos-03.png';
            img4.src= 'proteccion civil-04.png';
        }else if(results[0].label=="bomberos"){
            img.src='policia-01.png';
            img2.src= 'ambulancia-02.png';
            img3.src= 'bomberos-03.gif';
            img4.src= 'proteccion civil-04.png';
        }else{
            img.src='policia-01.png';
            img2.src= 'ambulancia-02.png';
            img3.src= 'bomberos-03.png';
            img4.src= 'proteccion civil-04.gif';
        }


    }
    

}