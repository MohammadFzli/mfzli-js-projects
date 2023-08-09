let userList = [
         {
            name:'barbod',
            id: '123',
            age: 28,
            field:'kardani'  
 },
 {
    name:'vihan',
    id: '456',
    age: 32,
    field:'doktora'
},
{
    name:'mohammad',
    id: '789',
    age: 26,
    field:'arshad',
},

 ];

 

const addPerson = (name, age, field) => {
  let person = {
    name,
    id: self.crypto.randomUUID(),
    age,
    field,
  }
    userList.push(person);
}

const removePerson = (name) => {
  let index = -1;
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].name === name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    userList.splice(index, 1);
  }
}

const editPerson = (name, newAge, newField) => {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].name === name) {
      userList[i].age = newAge;
      userList[i].field = newField;
      break;
    }
  }
}

console.log(userList);

addPerson("farbod",23,"lissns");
console.log(userList)

removePerson('mohammad');
console.log(userList);

editPerson('barbod',30,'lisans');
console.log(userList);