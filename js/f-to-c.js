function chengeFTOC (fDegree){

    let cDegree = (fDegree - 32) * (5 / 9) ;

    return cDegree;
}

const fDegree = +prompt("Enter Fahrenheit Degree :");
const celsiusDegree = chengeFTOC(fDegree);
console.log("[C Degree] = ",celsiusDegree);
document.writeln("[C Degree] = ",celsiusDegree);
