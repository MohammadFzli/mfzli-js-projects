const numOne = +prompt("Enter The First Number:");
const yorOperator = prompt("Enter The Operator (+, -, *, /):");
const numTwo = +prompt("Enter The Second Number:");

if(isNaN(numOne) || isNaN(numTwo)){
    document.writeln(".::::Error::::. Invalid input. Please enter numbers only .::::Error::::. ")
    console.log(".::::Error::::. Invalid input. Please enter numbers only .::::Error::::. ")
}else{
    document.writeln("The First Number= ",numOne );
    console.log("The First Number= ",numOne);
    document.writeln("The Second Number= ",numTwo );
    console.log("The Second Number= ",numTwo );
}
     
if (yorOperator === "+") {
        console.log("Result(+): " , (numOne + numTwo));
        document.writeln("Result(+): " , (numOne + numTwo));
      } else if (yorOperator === "-") {
        console.log("Result(-): " , (numOne - numTwo));
        document.writeln("Result(-): " , (numOne - numTwo));
      } else if (yorOperator === "*") {
        console.log("Result(*): " , (numOne * numTwo));
        document.writeln("Result(*): " , (numOne * numTwo));
      } else if (yorOperator === "/") {
        console.log("Result(/): " , (numOne / numTwo));
        document.writeln("Result(/): " , (numOne / numTwo));
      } else {
        document.writeln(" .::::Error::::. Invalid operator. Please enter a valid operator (+, -, *, /) .::::Error::::.");
        console.log(" .::::Error::::. Invalid operator. Please enter a valid operator (+, -, *, /) .::::Error::::.");

      }