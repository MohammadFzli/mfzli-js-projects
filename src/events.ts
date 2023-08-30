import {
    contactListDrawer,
    contactNameInput,
    phonNumberInput,
    deviceStorageInput,
    contactListElement,
} from './importer.js';
import {ContactProps, contactInfoType} from './types';
import { contactList } from './importer.js';
import { createListItem, validateFields } from './functions.js';
export const showContactsButtonHandler =  () => {
    contactListDrawer?.classList.remove("bottom-[-100%]");
    contactListDrawer?.classList.add("bottom-[0%]");
};

export const closeDrawerButtonHandler =  () => {
    contactListDrawer?.classList.remove("bottom-[0%]");
    contactListDrawer?.classList.add("bottom-[-100%]");
};

const validateCreatContact = (contactInfo: contactInfoType) => {
    if(!validateFields(contactInfo.contactName, contactInfo.PhoneNumber + "")){
        alert('Fill All Firlds')
        throw Error('Fill All Firlds')
     };
}

export const submitButtonHandler =  () => {

    validateCreatContact({
        contactName:contactNameInput!.value,
        PhoneNumber:phonNumberInput!.value,
    });

    const newContact:ContactProps = {
        id: crypto.randomUUID(),
        contactName:contactNameInput?.value ?? '',
        PhoneNumber:phonNumberInput?.value ?? '',
        avatar:null,
        storage:deviceStorageInput?.checked ?  "Device" : "SIM"  ,
    };
    contactList.push(newContact);
    
    const listItem = createListItem({
        contactName: newContact.contactName,
        PhoneNumber: newContact.PhoneNumber,
    });

    contactListElement?.appendChild(listItem);
    
    };
