import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-from-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener('submit', submitForm);
form.addEventListener('input', throttle(inputForm, 500));

const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
getData();

function inputForm () {
    const storageData = {
        mail: email.value,
        message: message.value,

    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageData));
}

function getData() {
    if (parsedData) {
        email.value = parsedData.mail;
        message.value = parsedData.message;
    }
}

function submitForm(evt) {
    evt.preventDefault();
    form.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(parsedData);
}