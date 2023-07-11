!function(){var e={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea")};e.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset()})),e.textarea.addEventListener("input",(function(e){var t=e.currentTarget.value;localStorage.setItem("feedback-form-state",t)}))}();
//# sourceMappingURL=03-feedback.7bdb0348.js.map
