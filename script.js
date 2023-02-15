let calcResult = "";
let intResult = 0;
let secondResult = "";
let intsecResult = 0;
let operatorActive = false;
let previousOperator = "";
let newDisplay = false;

const clickNumbers = document.getElementsByClassName("num");
const displayAns = document.getElementById("res");
const clickPlus = document.getElementById("plus");
const clickMinus = document.getElementById("minus");
const clickTimes = document.getElementById("times");
const clickDivide = document.getElementById("divide");
const clickEqual = document.getElementById("equal");
const clickClear = document.getElementById("clear");
const clickOperators = document.getElementsByClassName("operators");
const clickDelete = document.getElementById("delete");
/*
clickClear.onclick = () => {
  //console.log("clear heh");
  setTimeout(function(){
    window.location.reload();
  });
  refreshPage();
  
} 
function refreshPage(){
  window.location.reload();
} 
*/

clickDelete.onclick = (e) => {
  //console.log(`intres = ${intResult} calcres = ${calcResult}`);
  intResult -= intResult%10;
  //console.log(`intres ${intResult}`)
  intResult /= 10;
  calcResult = calcResult.substring(0, calcResult.length-1);
  //console.log(`intres jadi ${intResult} calcres jdi ${calcResult}`);
  displayAns.innerText = calcResult;
}

clickEqual.onclick = (e) => {
  if(previousOperator == "plus"){
    intResult = intsecResult + intResult;
    calcResult = intResult.toString();
  }
  if(previousOperator == "minus"){
    intResult = intsecResult - intResult;
    calcResult = intResult.toString();
  }
  if(previousOperator == "times"){
    intResult = intsecResult * intResult;
    calcResult = intResult.toString();
  }
  if(previousOperator == "divide"){
    intResult = intsecResult / intResult;
    calcResult = intResult.toString();
  }
  displayAns.innerText = calcResult;
  calcResult = "";
  intResult = 0;
  secondResult = "";
  intsecResult = 0;
  newDisplay = false;
  previousOperator = "";
  operatorActive = false;
}

for(var i = 0; i<clickOperators.length; i++){
  clickOperators[i].onclick = function(){
    if(!operatorActive){
      secondResult = calcResult;
      intsecResult = intResult;
      calcResult = "";
      intResult = null;
      operatorActive = true;
    } else {
      if(previousOperator == "plus"){
        intsecResult = intsecResult + intResult;
        secondResult = intsecResult.toString();
        intResult = null;
        calcResult = "";
      }
      if(previousOperator == "minus"){
        intsecResult = intsecResult - intResult;
        secondResult = intsecResult.toString();
        intResult = null;
        calcResult = "";
      }
      if(previousOperator == "times"){
        intsecResult = intsecResult * intResult;
        secondResult = intsecResult.toString();
        intResult = null;
        calcResult = "";
      }
      if(previousOperator == "divide"){
        intsecResult = intsecResult / intResult;
        secondResult = intsecResult.toString();
        intResult = null;
        calcResult = "";
      }
      displayAns.innerText = intsecResult;
      newDisplay = true;
    }
  }
}

clickPlus.onclick = () => {
  previousOperator = "plus";
}

clickMinus.onclick = () => {
  previousOperator = "minus";
}

clickTimes.onclick = () => {
  previousOperator = "times";
}

clickDivide.onclick = () => {
  previousOperator = "divide";
}

for(var i = 0; i<clickNumbers.length; i++) {
  clickNumbers[i].onclick = function(e){
      if(newDisplay){
        newDisplay = false;
        displayAns.innerHTML = calcResult;
      }
      intResult *= 10;
      //console.log(this.innerHTML);
      intResult += +this.innerHTML;
      calcResult += this.innerHTML;
      displayAns.innerText = calcResult;
      //console.log("wut");
      //console.log(`intres ${intResult} calcres ${calcResult}`);
  }
};

clickClear.onclick = () => {
  //console.log("clear heh");
  window.location.reload();
  calcResult = "";
  intResult = 0;
  secondResult = "";
  intsecResult = 0;
}

/*
clickNumbers.onclick = (e) => {
  intResult *= 10;
  //console.log("hellow");
}
*/
