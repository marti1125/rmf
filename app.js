var yourAudio = document.getElementById('yourAudio'),
        ctrl = document.getElementById('audioControl');

document.querySelector('#volume').value = document.querySelector('#fader').value * 100 + "%";

function outputUpdate(vol) {
    var volt = vol * 100;
    document.querySelector('#volume').value = volt.toString()+"%";
    yourAudio.volume = vol;
    document.querySelector('#fader').value = vol
}

String.prototype.filename=function(extension){
    var s= this.replace(/\\/g, '/');
    s= s.substring(s.lastIndexOf('/')+ 1);
    return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
}    

ctrl.onclick = function () {

    var imgPlayStop = document.getElementById('img').src.filename();
    var volume = document.querySelector('#fader').value;
    
    // Update the Button
    if(imgPlayStop == 'stop'){        
        ctrl.innerHTML = '<img id="img" src="play.svg"/>';
        yourAudio['pause']();          
        yourAudio.volume = volume;
    } else {        
        yourAudio['play']();
        ctrl.innerHTML = '<img id="img" src="stop.svg"/>';
        yourAudio.volume = volume; 
    }

    return false;
};