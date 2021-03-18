

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
    const pauseButton = document.querySelector('.pause.button');
    const addNewRadioStationButton = document.querySelector('.buttonBlack');
    const addNewRadioStationForm = document.querySelector('.form');
    let chosenRadioStation;
    let lastChoice;

    
    function stationSelection(event){

        const newRadioStation = event.currentTarget.getAttribute('data-station-id');
        const selectedRadioStation = radioStations.find(station => station.id === newRadioStation);

        if (selectedRadioStation) {
                audio.setAttribute('src', selectedRadioStation.link);
                audio.play();
                changeColorRadioStationName(selectedRadioStation.id);
                changeHeaderRadioStationName(selectedRadioStation.name);

                // TODO: fix asynchronous play/pause issue        
        }
        chosenRadioStation = selectedRadioStation;    
    }

    function changeColorRadioStationName(radioStationId) {

        let radioStationButton = document.querySelector(`.station[data-station-id="${radioStationId}"]`)

        if(lastChoice) {
            lastChoice.classList.remove("active");
        }
        radioStationButton.classList.add("active");
        lastChoice = radioStationButton;
    }

    function changeHeaderRadioStationName(radioStationName) {

        currentRadioStationNameHeader.innerHTML = radioStationName;

    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setCurrentRadioStation(radioStation) {

        audio.pause();
        audio.setAttribute('src', radioStation.link);
        selectedRadioStation = radioStation;
        changeColorRadioStationName(radioStation.id);
        changeHeaderRadioStationName(radioStation.name);
    }
    
    function getRandomStation(){
        const randomInt = getRandomInt(0, radioStations.length - 1);
        return radioStations[randomInt];
    }

    function playStation() {

        if(!chosenRadioStation) {
            chosenRadioStation = getRandomStation();
        } 

        setCurrentRadioStation(chosenRadioStation);
        audio.play();

    }


    function pauseStation(){
        if(chosenRadioStation) {
            audio.pause();
        } 
    }
    function showForm() {
        addNewRadioStationForm.classList.add('active');
    }




    playButton.addEventListener('click', playStation);
    pauseButton.addEventListener('click', pauseStation);
    addNewRadioStationButton.addEventListener('click', showForm);
    stations.forEach(station => station.addEventListener('dblclick', stationSelection));


});