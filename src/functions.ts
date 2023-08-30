import { contactListElement, phonNumberInput } from "./importer.js";
import { contactInfoType } from "./types.js";


export const validateFields = (...fields: string[]) => {
    return fields.every(fields => !!(fields).toString() );
   
};

export const createListItem = (contactInfo:contactInfoType):HTMLLIElement => {
    const listItem = document.createElement("li");
    listItem.style.backgroundColor="#dfd0f7";
    listItem.className = "py-4 px-2 mb-2 rounded-lg";

    const contactNameElement = document.createElement("h2");
    contactNameElement.className = "text-slate-700";
    contactNameElement.innerText = contactInfo.contactName;
    const contactPhoneNumberElement = document.createElement("p");
    contactPhoneNumberElement.className = "text-slate-500";
    contactPhoneNumberElement.innerText = contactInfo.PhoneNumber.toString();
    
    listItem.appendChild(contactNameElement);
    listItem.appendChild(contactPhoneNumberElement);
    
    
    return listItem;
};

