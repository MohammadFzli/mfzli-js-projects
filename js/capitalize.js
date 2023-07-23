const titleWord = prompt("Enter Words: ",);

function capitalizeString(str) {
    return str.toUpperCase();
}

console.log(capitalizeString(titleWord));
document.writeln(" TXT Capitalizer: ",capitalizeString(titleWord));