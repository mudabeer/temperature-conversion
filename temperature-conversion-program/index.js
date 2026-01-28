const inputvalue = document.getElementById("boxinput");
const button = document.getElementById("buttonsub");
const result = document.getElementById("result");
const cTof = document.getElementById("celsius-fahrenheit");
const fToc = document.getElementById("fahrenheit-celsius");
let temp;

console.log("link sucessful")

button.onclick = function(){
    console.log("click working")
    if(Boolean(inputvalue.value) != true){
        result.textContent = "Empty input"
    }
    else{
        cTof.checked ? result.textContent = Number(inputvalue.value)*9/5+32 + "F" : fToc.checked ? result.textContent = (Number(inputvalue.value)-32)*(5/9) + "C": result.textContent = "Select the conversion type" ;
    }
}