"use strict";
let userList = [
    {
        name: 'Mohammad',
        familyName: 'Fazeli',
        age: 26,
        job: 'student',
        maritalStatus: false,
        gender: "male",
        id: 123,
        phoneNumber: 9365904226,
    },
    {
        name: 'Mhd',
        familyName: 'Fzl',
        age: 32,
        job: true,
        maritalStatus: false,
        gender: "male",
        id: crypto.randomUUID(),
    },
    {
        name: 'Test',
        familyName: 'Testiyan',
        age: 5000,
        job: true,
        maritalStatus: true,
        gender: "other",
        id: 456,
        phoneNumber: 123456789,
    },
];
//Create-User
const addUser = (user) => {
    userList.push(user);
};
//Update-User
const updateUser = (id, user) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList[userIndex] = user;
};
//Remove-User
const removeeUser = (id) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList.splice(userIndex, 1);
};
//Sort-By-Name
const sortByName = () => {
    userList.sort((a, b) => a.name.localeCompare(b.name));
};
//Functions-Test
addUser({
    name: 'O-Test-01',
    familyName: 'Testiyan-01',
    age: '1000000',
    job: 'abcd',
    maritalStatus: true,
    gender: "other",
    height: 10,
    weight: 10,
    id: crypto.randomUUID(),
    phoneNumber: 9171171717,
});
const updateUserTest = {
    name: 'N-Update Test',
    familyName: 'Update Teststiyan',
    age: 2023,
    job: 'update Job',
    maritalStatus: true,
    gender: 'other',
    id: 456,
    phoneNumber: '9876543210',
};
updateUser(456, updateUserTest);
removeeUser(456);
sortByName();
console.log(userList);
