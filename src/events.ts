import {
    contactListDrawer,
    contactNameInput,
    phonNumberInput,
    deviceStorageInput,
    contactListElement,
} from './importer.js';
import {ContactProps} from './types';
import { contactList } from './importer.js';
export const showContactsButtonHandler =  () => {
    contactListDrawer?.classList.remove("bottom-[-100%]");
    contactListDrawer?.classList.add("bottom-[0%]");
};

export const closeDrawerButtonHandler =  () => {
    contactListDrawer?.classList.remove("bottom-[0%]");
    contactListDrawer?.classList.add("bottom-[-100%]");
};

export const submitButtonHandler =  () => {
    const newContact:ContactProps = {
        id: crypto.randomUUID(),
        contactName:contactNameInput?.value ?? '',
        PhoneNumber:phonNumberInput?.value ?? '',
        avatar:null,
        storage:deviceStorageInput?.checked ?  "Device" : "SIM"  ,
    };
    contactList.push(newContact);
    
    const listItem = document.createElement("li");
    listItem.style.backgroundColor="#dfd0f7";
    listItem.className = "py-4 px-2 mb-2 rounded-lg";
    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = newContact.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-500";
    contactPhoneNumberElement.innerText = newContact.PhoneNumber.toString();
    
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    
    contactListElement?.appendChild(listItem); 
    
    // contactListElement?.innerHTML += '<li class="py-4 px-1">
    // <h2>${newContact.contactName}</h2>
    // <p>${newContact.PhoneNumber}</p>
    // </li>';
    };