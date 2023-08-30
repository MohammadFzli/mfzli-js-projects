import { ContactListType } from "./types";
export const contactNameInput = document.querySelector<HTMLInputElement>("#contactName");
export const phonNumberInput = document.querySelector<HTMLInputElement>("#phoneNumber");
export const deviceStorageInput = document.querySelector<HTMLInputElement>("#deviceStorage");

export const contactListElement = document.querySelector<HTMLUListElement>("#contact-list");

export const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
export const showContactsButton = document.querySelector<HTMLButtonElement>("#showContactsButton");

export const contactListDrawer = document.querySelector<HTMLButtonElement>("#contactListDrawer");
export const closeDrawerButton = document.querySelector<HTMLButtonElement>("#closeDrawerButton");


export const contactList: ContactListType =[];

