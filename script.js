

window.addEventListener('DOMContentLoaded',() => {

    const radioStations = [
        {id: 'cat-country', name: 'Cat County 98.1', link:'http://17573.live.streamtheworld.com/WCTKFMAAC.aac'},
        {id: 'americas-country', name: 'America\'s Country', link:'https://ais-sa2.cdnstream1.com/1976_128.mp3'},
        {id: 'ktwb-big-country', name: 'KTWB Big Country 92.5', link:'https://14083.live.streamtheworld.com/KTWBFMAAC.aac'},
        {id: 'country-208', name: 'Country 108',link:'http://icepool.silvacast.com/COUNTRY108.mp3'},
        {id: 'kickin-country', name: 'Kickin\' Country 181.fm', link:'https://listen.181fm.com/181-kickincountry_128k.mp3'}
    ];
    
    const stations = document.querySelectorAll('.station');
    const audio = document.querySelector('#audio');
    const currentRadioStationNameHeader = document.querySelector('.station-name');
    const playButton = document.querySelector('.play.button');
    let lastChoice;
    let isRadioStationChoosen;
    
    function stationSelection(event){

        const newRadioStation = event.currentTarget.getAttribute('data-station-id');
        const selectedRadioStation = radioStations.find(station => station.id === newRadioStation);
        
        if(lastChoice) {
            lastChoice.classList.remove("active");
        }
        event.currentTarget.classList.add("active");
        lastChoice = event.currentTarget;

        if (selectedRadioStation) {
                audio.setAttribute('src', selectedRadioStation.link);
                audio.play();
                changeHeaderRadioStationName(selectedRadioStation.name);

                // TODO: fix asynchronous play/pause issue        
        }
        isRadioStationChoosen = true;
    
    }

    function changeHeaderRadioStationName(radioStationName) {

        currentRadioStationNameHeader.innerHTML = radioStationName;

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    function playStation() {

        if(isRadioStationChoosen) {
            audio.play();

        } else {
            const randomInt = getRandomInt(0,(radioStations.length - 1))
            const randomStation = radioStations[randomInt];
            
            if(randomStation) {

                audio.setAttribute('src', randomStation.link);
                audio.play();
                changeHeaderRadioStationName(randomStation.name);
            }
           
        }




    }
    
    playButton.addEventListener('click', playStation);
    stations.forEach(station => station.addEventListener('dblclick', stationSelection));


});