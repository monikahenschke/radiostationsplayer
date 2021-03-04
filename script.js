

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
    
    function stationSelection(event){

        const newRadioStation = event.currentTarget.getAttribute('data-station-id');
        const selectedRadioStation = radioStations.find(station => station.name === newRadioStation);

        if (selectedRadioStation) {
                audio.setAttribute('src', selectedRadioStation.link);
                audio.play();
        // TODO: fix asynchronous play/pause issue        }

    
    }
    
    stations.forEach(station => station.addEventListener('dblclick', stationSelection));


});