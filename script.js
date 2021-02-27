

const stations = document.querySelectorAll('.station');
let currentRadioStation;

function stationSelection(){

    if(currentRadioStation) {
        currentRadioStation.pause();
    }
    let audio = this.querySelector('.audio');
    audio.play();
    currentRadioStation = audio;

}

stations.forEach(station => station.addEventListener('dblclick', stationSelection));

