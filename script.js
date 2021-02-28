

const stations = document.querySelectorAll('.station');
const currentRadioStationName = document.querySelector('.station-name');

let currentRadioStation;

function stationSelection(){

    if(currentRadioStation) {
        currentRadioStation.pause();
    }

    let audio = this.querySelector('.audio');
    let name = this.querySelector('span');

    currentRadioStationName.innerHTML = name.innerText;
    audio.play();
    
    currentRadioStation = audio;
}

stations.forEach(station => station.addEventListener('dblclick', stationSelection));

