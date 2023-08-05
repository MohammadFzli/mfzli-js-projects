 let userList = [
         {
     randomWord:"test1",
     randomNum: "123",
     randomDate: "2021",
    
 },
 {
     randomWord:"test2",
     randomNum: "456",
     randomDate: "2022",
    
 },
 {
    randomWord:"test3",
    randomNum: "789",
    randomDate: "2023",
   
},
 ];
 const randomObject = (number) => {
    for (let i = 0; i < number; i++) {
        const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
        let randomWord = '';
            for (let i = 0; i <= 5; i++) {
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            randomWord += alphabet[randomIndex];
            };
         let newUserList={
         randomWord,
         randomNum: self.crypto.randomUUID(),
         randomDate: Date.now(),
     };
     userList.push(newUserList);
    };
 
 };
 let number= +prompt("Enter Number to Create the Object");
 randomObject(number);
 console.log(userList);
