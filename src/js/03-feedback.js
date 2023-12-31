import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const throttledFormInput = throttle(onFormInput, 500);

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttledFormInput);

onLoading();

function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: {email, message }
    } = e.currentTarget;
    const dataUser = {
        email: email.value,
        message: message.value
    };
    console.log(dataUser);
    localStorage.removeItem(localStorageKey);
    e.currentTarget.reset();
};

function onFormInput() {
    const {
        elements: {email, message }
    } = form;
    const dataUser = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem(localStorageKey, JSON.stringify(dataUser));
    onLoading();
};

function onLoading() {
    const savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        form.elements.email.value = email;
        form.elements.message.value = message;
    } else {
        form.reset();
    };
    };