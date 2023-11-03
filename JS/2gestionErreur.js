/**
 * Cette fonction permet d'afficher un message d'erreur sur la page
 * @param {string} field - Le champ input concerné
 * @param {string} message - Le message d'erreur à afficher
 */
function addErrorMsg(field, message) {
    field.classList.add('error-border');
    field.previousElementSibling.classList.add('error-color');
    if (field.nextElementSibling !== null) {
        field.nextElementSibling.remove();
        field.insertAdjacentHTML('afterend', `<p class='error-msg error-color'><em>${message}</em></p>`);
    } else {
        field.insertAdjacentHTML('afterend', `<p class='error-msg error-color'><em>${message}</em></p>`);
    }
}

/**
 * Cette fonction supprime le message d'erreur de la page
 * @param {string} field - Le champ input concerné
 */
function removeErrorMsg(field) {
    field.classList.remove('error-border');
    field.previousElementSibling.classList.remove('error-color');

    if (field.nextElementSibling !== null) {
        field.nextElementSibling.remove();
    }
}
