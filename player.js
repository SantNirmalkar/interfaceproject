let probar=document.getElementById("probar");
let song=document.getElementById("song");
let ctrlicon = document.getElementById("ctrlicon");

song.onloadedmetadata= function(){
    probar.max = song.duration;
    probar.value = song.currentTime;
}
function playpause(){
    if(ctrlicon.classList.contains("fa-pause")){
        song.pause();
        ctrlicon.classList.remove("fa-pause");
        ctrlicon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlicon.classList.add("fa-pause");
        ctrlicon.classList.remove("fa-play");
    }
}

    setInterval(()=>{
        probar.value=song.currentTime;
    },500);

probar.onchange = function(){
    song.currentTime = probar.value;
    song.play();
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
}
