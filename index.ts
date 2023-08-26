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

// type ContactProps={
//     id:string | number;
//     contactName:string;
//     PhoneNumber:string;
//     storage:"SIM" | "Device";
//     avatar:string | null;

// };
// type ContactListType = ContactProps[];



// const contactNameInput = document.querySelector<HTMLInputElement>("#contactName");
// const phonNumberInput = document.querySelector<HTMLInputElement>("#phoneNumber");
// const deviceStorageInput = document.querySelector<HTMLInputElement>("#deviceStorage");

// const contactListElement = document.querySelector<HTMLUListElement>("#contact-list");

// const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
// const showContactsButton = document.querySelector<HTMLButtonElement>("#showContactsButton");

// const contactListDrawer = document.querySelector<HTMLButtonElement>("#contactListDrawer");
// const closeDrawerButton = document.querySelector<HTMLButtonElement>("#closeDrawerButton");

showContactsButton?.addEventListener("click", showContactsButtonHandler);
closeDrawerButton?.addEventListener("click", closeDrawerButtonHandler);
submitButton?.addEventListener("click", submitButtonHandler);