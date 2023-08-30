export type ContactProps={
    id:string | number;
    contactName:string;
    PhoneNumber:string;
    storage:"SIM" | "Device";
    avatar:string | null;

};

export type ContactListType = ContactProps[];

export type contactInfoType ={
    contactName:string;
    PhoneNumber:string|number;
};