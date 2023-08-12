type UserType = {
    name:String;
    familyName:string;
    age:number | string;
    job:string|boolean;
    maritalStatus:boolean;
    gender: "male"|"female"|"other";
    height?:number;
    weight?:number;
    id:number|string;
    phoneNumber?:number|string;

};


let userList:Array<UserType> = [
    {
        name:'Mohammad',
        familyName:'Fazeli',
        age:26,
        job:'student',
        maritalStatus:false,
        gender: "male",
        id:123,
        phoneNumber:9365904226,
    },
    {
        name:'Mhd',
        familyName:'Fzl',
        age:32,
        job:true,
        maritalStatus:false,
        gender: "male",
        id:crypto.randomUUID(),
    },
    {
        name:'Test',
        familyName:'Testiyan',
        age:5000,
        job:true,
        maritalStatus:true,
        gender: "other",
        id:456,
        phoneNumber:123456789,
    },
];

//Create-User
const addUser = (user:UserType):void => {
    userList.push(user);
}
 
//Update-User
const updateUser = (id: UserType['id'] , user: UserType) =>{
const userIndex: number = userList.findIndex((item) => item.id === id);
userList[userIndex] = user;
}

//Remove-User
const removeeUser = (id: UserType["id"]):void => {
    const userIndex: number = userList.findIndex((item) => item.id === id);
    userList.splice(userIndex, 1);
}

//Sort-By-Name
const sortByName = (): void => {
    userList.sort((a, b) => a.name.localeCompare(b.name));
  };


//Functions-Test
  
  addUser(
    {
        name:'O-Test-01',
        familyName:'Testiyan-01',
        age:'1000000',
        job:'abcd',
        maritalStatus:true,
        gender:"other",
        height:10,
        weight:10,
        id:crypto.randomUUID(),
        phoneNumber:9171171717,
    },
  )

  const updateUserTest: UserType = {
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

  removeeUser(456) 
  
  sortByName();

console.log(userList);