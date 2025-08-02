import { hideModal, showModal } from "./modal.js";    

document.addEventListener("DOMContentLoaded", () => {
 const form = document.getElementById("survey-form");
 const closeBtn = document.getElementById("close-modal");

 
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        // Aquí podrías agregar la lógica para enviar los datos del formulario
        showModal();
        form.reset();
    });

    closeBtn.addEventListener("click", () => {
        hideModal();
});

});
