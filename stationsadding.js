window.addEventListener('DOMContentLoaded',() => {

    const newStationURL = document.querySelector('#newRadioStationURL');
    const newStationName = document.querySelector('#newRadioStationName');
    const radioStationsList = document.querySelector('.stationList__stations');


    function generateUniqueId(){
        return Date.now();
    }

    function addNewRadioStationToList(radioStationAdded, newUniqueId) {
        
        const newHTMLElementLi = document.createElement('li');
        radioStationsList.appendChild(newHTMLElementLi);

        const newHTMLElementButton = document.createElement('button');
        newHTMLElementButton.classList.add("station");
        newHTMLElementButton.setAttribute("data-station-id", newUniqueId);
        newHTMLElementLi.appendChild(newHTMLElementButton);

        const newHTMLElementSpan = document.createElement('span');
        newHTMLElementSpan.innerHTML = radioStationAdded.name;
        newHTMLElementButton.appendChild(newHTMLElementSpan);
        

        clearForm();
    }
    function addExistingRadioStationToList() {

        let radioStations = JSON.parse(window.localStorage.getItem('radioStations'));

        if(radioStations) {
        radioStationsArray.push(...radioStations);
        //radioStationsArray.push.apply(radioStationsArray,radioStations);
        //radioStationsArray = radioStationsArray.concat(radioStations);
        
        radioStations.forEach(station => {

            const newHTMLElementLi = document.createElement('li');
            radioStationsList.appendChild(newHTMLElementLi);
    
            const newHTMLElementButton = document.createElement('button');
            newHTMLElementButton.classList.add("station");
            newHTMLElementButton.setAttribute("data-station-id", station.id);
            newHTMLElementLi.appendChild(newHTMLElementButton);

    
            const newHTMLElementSpan = document.createElement('span');
            newHTMLElementSpan.innerHTML = station.name;
            newHTMLElementButton.appendChild(newHTMLElementSpan);

        });
    }

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