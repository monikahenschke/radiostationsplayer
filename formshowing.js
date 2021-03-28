
window.addEventListener('DOMContentLoaded',() => {

const addNewRadioStationButton = document.querySelector('.buttonBlack');
const addNewRadioStationForm = document.querySelector('.form');


   
function showForm() {
    addNewRadioStationForm.classList.add('active');
}

addNewRadioStationButton.addEventListener('click', showForm);

});
