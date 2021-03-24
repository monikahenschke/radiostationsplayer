
const state = {};
const InputURL = document.querySelector('#newRadioStationURL');
const submitButton = document.querySelector('#addNewRadioStationButton');


function ext(url) {
    const extension = (url = url.substr(1 + url.lastIndexOf("/")).split('?')[0]).split('#')[0].substr(url.lastIndexOf("."));
    return extension === '.m4a' || extension === '.aac' || extension === '.mp3';
}

function isValidHttpUrl(string) {
    let url;
    let error;


    try {
        url = new URL(string);
    } catch (_) {
        return 'Nieprawidłowy link';
    }

    const checkExtensionOfURL = ext(string);
    const checkFirstPartOfURL = url.protocol === "http:" || url.protocol === "https:";


    if(!checkFirstPartOfURL) {
        error = 'Zły początek linku';
    }
    if(!checkExtensionOfURL) {
        error = 'Złe rozszerzenie linku';
    }

}


function showErrorMessage(errorMessage, errorSpan){
    errorSpan.innerText = errorMessage;

}

function clearErrorMessage(errorSpan) {

    errorSpan.innerText = "";
}

function unlockSubmitButton() {

    submitButton.removeAttribute('disabled');
}

function lockSubmitButton() {
    submitButton.setAttribute('disabled', '');
}

function checkTextField(event) {

   const name = event.target.name;
   const errorSpan = event.target.parentNode.querySelector('.error');


   if(!state[name]) {
    state[name] = {};
   }

   state[name]['value'] = event.target.value;
   const error = isValidHttpUrl(state[name]['value']);


   if(error) {
        showErrorMessage(error, errorSpan);
        lockSubmitButton();
   } else {
       clearErrorMessage(errorSpan);
       unlockSubmitButton();
   }

}



InputURL.addEventListener('keyup', checkTextField);
