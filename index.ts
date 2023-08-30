import {
    showContactsButton,
    closeDrawerButton,
    submitButton,
} from './src/importer.js'
import {
    showContactsButtonHandler,
    closeDrawerButtonHandler,
    submitButtonHandler,
} from './src/events.js';

showContactsButton?.addEventListener("click", showContactsButtonHandler);
closeDrawerButton?.addEventListener("click", closeDrawerButtonHandler);
submitButton?.addEventListener("click", submitButtonHandler);