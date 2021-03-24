window.addEventListener('DOMContentLoaded',() => {

    const newStationURL = document.querySelector('#newRadioStationURL');
    const newStationName = document.querySelector('#newRadioStationName');
    const radioStationsList = document.querySelector('.stations');


    function generateUniqueId(){
        return Date.now();
    }

    function addNewRadioStationToList(radioStationAdded, newUniqueId) {
        
        const radioStationAddedHtml = `
        <li class="">
            <button class="station" data-station-id="${newUniqueId}">
                <span>${radioStationAdded.name}</span>
            </button>
        </li>`;

        radioStationsList.innerHTML += radioStationAddedHtml;
        clearForm();
    }
    function addExistingRadioStationToList() {

        let radioStations = JSON.parse(window.localStorage.getItem('radioStations'));

        radioStationsArray.push(...radioStations);
        //radioStationsArray.push.apply(radioStationsArray,radioStations);
        //radioStationsArray = radioStationsArray.concat(radioStations);
        
        radioStations.forEach(station => {
            let radioStationAddedHtml = `
            <li class="">
                <button class="station" data-station-id="${station.id}">
                    <span>${station.name}</span>
                </button>
            </li>`;
            radioStationsList.innerHTML += radioStationAddedHtml;

        });

    }

    function clearForm() {
        newStationURL.value ="";
        newStationName.value = "";
    }

    function onSendNewRadtioStation() {
        const newUniqueId = generateUniqueId();
        const radioStationAdded = getRadioStationFromForm(newUniqueId);
      
        radioStationsArray.push(radioStationAdded);

        addNewRadioStationToLS(radioStationAdded);
        addNewRadioStationToList(radioStationAdded, newUniqueId);
    }


    function addNewRadioStationToLS(radioStationAdded) {
        const radioStations = getRadioStationsFromLS();
        radioStations.push(radioStationAdded);
        window.localStorage.setItem('radioStations', JSON.stringify(radioStations));
    }

    function getRadioStationsFromLS() {
        let radioStations = JSON.parse(window.localStorage.getItem('radioStations'));
        if (radioStations === null) {
            radioStations = [];
        }
        return radioStations;
    }

    function getRadioStationFromForm(newUniqueId) {
    
        const radioStationAdded = {
            'id': newUniqueId,
            'name': newStationName.value,
            'link': newStationURL.value,
        };
        return radioStationAdded;
    }


    addNewRadioStationButton.addEventListener('click', onSendNewRadtioStation);
    addExistingRadioStationToList();
})