


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
    e.preventDefault();
    const {
        elements: {email, message }
} = e.currentTarget;
    e.currentTarget.reset();
};

function onTextareaInput(e) {
    const {
        elements: {email, message }
} = e.currentTarget;
    localStorage.setItem('feedback-form-state', message);
};