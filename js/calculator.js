function myCalculator (firstNumber=0,secondNumber=0, operator ){
  if(!isNaN(firstNumber+secondNumber)){
    switch (operator){
      case'+':
        return("Result(+): " , (firstNumber + secondNumber));
      case'-':
        return("Result(-): " , (firstNumber - secondNumber));
      case'*':
        return("Result(*): " , (firstNumber * secondNumber));
      case'/':
        return("Result/): " , (firstNumber / secondNumber));
      case'%':
        return("Result%): " , (firstNumber % secondNumber));
      default:
        return(" [ Erorr 404 ] ");  
    }
  }
  return"( Somting Is Wrong !!! )"
}
const firstNumber = +prompt("Enter The First Number:");
const secondNumber = +prompt("Enter The Second Number:");
const operator = prompt("Enter The Operator (+, -, *, /):");
document.writeln("[ First Number : ",firstNumber," ] ",operator," [ Second Number : ",secondNumber," ] ===> ",myCalculator(firstNumber, secondNumber, operator));
console.log(myCalculator(firstNumber, secondNumber, operator));