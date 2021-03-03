

window.addEventListener('DOMContentLoaded',() => {

    const radioStations = [
        {name: 'cat-country',link:'http://17573.live.streamtheworld.com/WCTKFMAAC.aac'},
        {name: 'americas-country', link:'https://ais-sa2.cdnstream1.com/1976_128.mp3'},
        {name: 'ktwb-big-country', link:'https://14083.live.streamtheworld.com/KTWBFMAAC.aac'},
        {name: 'country-208', link:'http://icepool.silvacast.com/COUNTRY108.mp3'},
        {name: 'kickin-country', link:'https://listen.181fm.com/181-kickincountry_128k.mp3'}
    ];
    
    const stations = document.querySelectorAll('.station');
    const audio = document.querySelector('#audio');
    const currentRadioStationNameHeader = document.querySelector('.station-name');
    let currentRadioStation;
    let currentRadioStationName;
    let lastChoice;
    
    function stationSelection(){

        currentRadioStation = this.getAttribute('data-station-id');
        currentRadioStationName = this.querySelector('span');
        
        if(lastChoice) {
            lastChoice.classList.remove("active");
        }

        radioStations.forEach(function(radioStation) {

            if(radioStation.name === currentRadioStation) {
                audio.src = radioStation.link;
            }
        });
        currentRadioStationNameHeader.innerHTML = currentRadioStationName.innerText;
        audio.play();

        this.classList.add("active");
        lastChoice = this;
    
    }
    
    stations.forEach(station => station.addEventListener('dblclick', stationSelection));


});