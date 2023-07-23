let number=0;
const avg=0;
let counter=0;

function avrage(num){

    document.writeln(" ( Number: ", num, ")");
    number=number+num;
    counter+=1;
    if(counter===5){

        number=number/5;

        if(number <= 12){

            console.log(" Rejected ");
            document.writeln(" ===> [Rejected] ");
        }
        else{

            console.log(" avg = ", number);
            document.writeln(" ===> avg:[ ", number, " ] ");
        }
    }
}

function itsNumber (temp){

    if(!isNaN(temp)){

        avrage(temp);

    }
    return" [ Erorr 404 ] ";
}

let insertTemp =0;
insertTemp = +prompt("Enter Number 1:");
itsNumber(insertTemp);
insertTemp = +prompt("Enter Number 2:");
itsNumber(insertTemp);
insertTemp = +prompt("Enter Number 3:");
itsNumber(insertTemp);
insertTemp = +prompt("Enter Number 4:");
itsNumber(insertTemp);
insertTemp = +prompt("Enter Number 5:");
itsNumber(insertTemp);