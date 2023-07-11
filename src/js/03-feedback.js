


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
};

function onTextareaInput(e) {
    const message = e.currentTarget.value;
    localStorage.setItem('feedback-form-state', message);
};