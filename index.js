const inputvalue = document.getElementById("boxinput");
const button = document.getElementById("buttonsub");
const result = document.getElementById("result");
const cTof = document.getElementById("celsius-fahrenheit");
const fToc = document.getElementById("fahrenheit-celsius");
let temp;

button.onclick = function(){

        cTof.checked ? result.textContent = Number(inputvalue.value)*9/5+32 + "F" : fToc.checked ? result.textContent = (Number(inputvalue.value)-32)*(5/9) + "C": result.textContent = "Select the conversion type" ;
}
