"use strict";
let display = document.querySelector("#display");
let xPowerY =  document.querySelector("#xPowerY");
let eq = document.querySelector("#eq");
let tempVal;

// Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area
function onLoad() {
  display.value = "0";
  xPowerY.disabled = true;
}

//  Separate function for key '^'
function carat(val) {
  tempVal = display.value;
  display.value += val;
  xPowerY.disabled = false;
  xPowerY.style.backgroundColor = "#2693e0";
  eq.disabled = true;
  eq.style.backgroundColor = "gray";
  }


// Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area
function key(val) {
  tempVal = display.value;

  if (tempVal === "0") {
    display.value = "";
  }
  switch (val) {
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
      display.value += val;
      break;
    case '+': case '-': case '*': case '/': case '%': case '.': case '(': case ')':
      tempVal;
      tempVal = display.value;
      if (tempVal = "") {
        display.value = "";
      }
      else if (tempVal != '+' && tempVal != '-' && tempVal != '*' && tempVal != '/' && tempVal != '%' && tempVal != '.') {
        display.value += val;
      }
      else {
        display.value = tempVal;
      }
  }
}

// <!-- Function allClear : This function clears everything in the display area-->
function allClear() {
  display.value = "0";
  xPowerY.style.backgroundColor = "transparent";
}

// <!-- This function clears the entry one by one, only if "0" is not displayed -->
function pop() {
  if (display.value === "0") {
    //do nothing.
  }
  else {
    let dispArr = (display.value).split('');
    dispArr.pop();
    display.value = dispArr.join('');
    if (dispArr.length === 0) {
      onLoad();
    }
  }

}

// <!-- This function evaluates the expression in the display area -->
function ans() {
  tempVal = display.value;
  try {
    if (!Number.isInteger(eval(tempVal))) {
      display.value = eval(tempVal).toFixed(4);
    }
    else{
      display.value = eval(tempVal);
    }
    

  } catch (e) {
    display.value = "Wrong Expression!";

  }
  finally {
   console.log("Evaluated Expression : " + display.value);
  }
}



// <!-- This function evaluates square root -->
function Sqrt() {
  tempVal = display.value;
  display.value = Math.sqrt(tempVal).toFixed(4);
}

// <!-- This function evaluates sine -->
function sin() {
  tempVal = display.value;
  display.value = Math.sin(tempVal).toFixed(4);
}

// <!-- This function evaluates cosine -->
function cos() {
  tempVal = display.value;
  display.value = Math.cos(tempVal).toFixed(4);
}

// <!-- This function evaluates tangent -->
function tan() {
  tempVal = display.value;
  display.value = Math.tan(tempVal).toFixed(4);
}

// <!-- This function evaluates log to the base 10 -->
function log() {
  tempVal = display.value;
  display.value = (Math.log(tempVal) / Math.LN10).toFixed(4);
}

// <!-- This function evaluates factorial -->
function fact() {
  tempVal = Math.floor(display.value);
  if (tempVal <= 1) {
    alert("Choose a number greater than 2");
  }
  let k = tempVal;
  while (tempVal != 1) {
    tempVal -= 1;
    k *= (tempVal);
  }
  display.value = k;
}

// <!-- This function evaluates pi -->
function PI() {
  tempVal = display.value;
  display.value = Math.PI.toFixed(4);
  }

// <!-- This function evaluates the expression in the display area -->
function POW() {
  let tempArr = display.value.split('');
  console.log(tempArr);
  //New code for more than single digits in calculation
  let loc;
  for (i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === '^') {
      loc = i;
    }
  }
  let base = '';
  let expo = '';
  for (i = 0; i < loc; i++) {
    base += tempArr[i];
  }
  for (i = (loc + 1); i < tempArr.length; i++) {
    expo += tempArr[i];
  }
  console.log("base is  : " + base);
  console.log("expo is  : " + expo);
try{
  if (!isNaN(base) && !isNaN(expo)) {
    display.value = Math.pow(base, expo);
  }
  else {
    display.value = "Enter like this : x^y";
  }
}
catch(e){
  display.value = e;
}
finally{
  eq.disabled = false;
  xPowerY.disabled = true;
  eq.style.backgroundColor = "#2693e0";
  xPowerY.style.backgroundColor = "transparent";
}
  

}
