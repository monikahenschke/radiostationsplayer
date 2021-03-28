
const radioStationsArray = [
    {id: 'cat-country', name: 'Cat County 98.1', link:'http://17573.live.streamtheworld.com/WCTKFMAAC.aac'},
    {id: 'americas-country', name: 'America\'s Country', link:'https://ais-sa2.cdnstream1.com/1976_128.mp3'},
    {id: 'ktwb-big-country', name: 'KTWB Big Country 92.5', link:'https://14083.live.streamtheworld.com/KTWBFMAAC.aac'},
    {id: 'country-208', name: 'Country 108',link:'http://icepool.silvacast.com/COUNTRY108.mp3'},
    {id: 'kickin-country', name: 'Kickin\' Country 181.fm', link:'https://listen.181fm.com/181-kickincountry_128k.mp3'}
];

function stationSelection(event, audioElement, state) {

    const button = event.target.getAttribute('data-station-id') ? event.target : event.target.parentNode;
    const newRadioStation = button.getAttribute('data-station-id');
    const selectedRadioStation = radioStationsArray.find(station => station.id == newRadioStation);
    
    if (selectedRadioStation) {
        audio.setAttribute('src', selectedRadioStation.link);
        audioElement.play().then(() => {
                runAnimation();
        }).catch(() => null);
        changeColorRadioStationName(selectedRadioStation.id, state);
        changeHeaderRadioStationName(selectedRadioStation.name, state);

    }
    state.chosenRadioStation = selectedRadioStation;    
}

function changeColorRadioStationName(radioStationId, state) {
    let radioStationButton = document.querySelector(`.station[data-station-id="${radioStationId}"]`)

    if(state.lastChoice) {
        state.lastChoice.classList.remove("active");
    }
    radioStationButton.classList.add("active");
    state.lastChoice = radioStationButton;
}

function changeHeaderRadioStationName(radioStationName) {
    const header = document.querySelector('.cassette__name');
    if (header) {
        header.innerHTML = radioStationName;
    }
}

function getRandomStation(){
    const randomInt = getRandomInt(0, radioStationsArray.length - 1);
    return radioStationsArray[randomInt];
}

function runAnimation(){
    const cassette = document.querySelector('.cassette__player');
    cassette.classList.add('animation-running');
}
function stopAnimation() {
    const animation = document.querySelector('.cassette__player');
        animation.classList.remove('animation-running');
}

function playStation(state, audioElement) {

    if(!state.chosenRadioStation) {
        state.chosenRadioStation = getRandomStation();
    } 

    setCurrentRadioStation(state.chosenRadioStation);
    audioElement.play().then(() => {
        runAnimation();
    }).catch(() => null);
}

function pauseStation(state, audioElement){
    if(state.chosenRadioStation) {
        audioElement.pause();
        stopAnimation();
    } 
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
    changeColorRadioStationName(radioStation.id, state);
    changeHeaderRadioStationName(radioStation.name, state);
}


window.addEventListener('DOMContentLoaded',() => {
    const state = {
        lastChoice: undefined,
        chosenRadioStation: undefined,
    };
    
    const audioElement = document.querySelector('#audio');
    const playButton = document.querySelector('.play.button');
    const pauseButton = document.querySelector('.pause.button');
    const stationsList = document.getElementById('list');


    playButton.addEventListener('click', () => playStation(state, audioElement));
    pauseButton.addEventListener('click', () => pauseStation(state, audioElement));

    stationsList.addEventListener('dblclick', (event) => {
        stationSelection(event, audioElement, state);
    });

    
});
