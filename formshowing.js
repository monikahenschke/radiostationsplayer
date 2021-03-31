
window.addEventListener('DOMContentLoaded',() => {

const addNewRadioStationButton = document.getElementById('showAddingRadioStationForm');
const addNewRadioStationForm = document.querySelector('.form');


   
function showForm(event) {

    const addNewStationBackgroundClassName = ".addNewStation__layer";
    const FormLayer = document.querySelector(addNewStationBackgroundClassName);
    addNewRadioStationForm.classList.add('active');

    addNewRadioStationForm.addEventListener('click', (clickevent) => hideForm(clickevent.target));
}

addNewRadioStationButton.addEventListener('click', showForm);

});

