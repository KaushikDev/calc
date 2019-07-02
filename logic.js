"use strict";
var i;
var flag = false;
var inputs = document.getElementsByTagName("button");

// Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area
function onLoad() {
  document.getElementById("display").value = "ON";
  document.getElementById("xPowerY").disabled = true;
}

//  Separate function for key '^'
function carat(val) {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value += val;
  document.getElementById("xPowerY").disabled = false;
  document.getElementById("xPowerY").style.backgroundColor = "#2693e0";
  document.getElementById("eq").disabled = true;
  document.getElementById("eq").style.backgroundColor = "gray";
  }


// Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area
function key(val) {
  var tempVal = document.getElementById("display").value;

  if (tempVal === "ON") {
    document.getElementById("display").value = "";
  }
  switch (val) {
    case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
      document.getElementById("display").value += val;
      break;
    case '+': case '-': case '*': case '/': case '%': case '.': case '(': case ')':
      var tempVal;
      tempVal = document.getElementById("display").value;
      if (tempVal = "") {
        document.getElementById("display").value = "";
      }
      else if (tempVal != '+' && tempVal != '-' && tempVal != '*' && tempVal != '/' && tempVal != '%' && tempVal != '.') {
        document.getElementById("display").value += val;
      }
      else {
        document.getElementById("display").value = tempVal;
      }
  }
}

// <!-- Function allClear : This function clears everything in the display area-->
function allClear() {
  document.getElementById("display").value = "ON";
  document.getElementById("xPowerY").style.backgroundColor = "transparent";
}

// <!-- This function clears the entry one by one, only if "ON" is not displayed -->
function pop() {
  if (document.getElementById("display").value === "ON") {
    //do nothing.
  }
  else {
    var dispArr = (document.getElementById("display").value).split('');
    dispArr.pop();
    document.getElementById("display").value = dispArr.join('');
    if (dispArr.length === 0) {
      onLoad();
    }
  }

}

// <!-- This function evaluates the expression in the display area -->
function ans() {
  var tempVal = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(tempVal);

  } catch (e) {
    document.getElementById("display").value = "Wrong Expression!";

  }
  finally {
   console.log("Evaluated Expression : " + document.getElementById("display").value);
  }
}



// <!-- This function evaluates square root -->
function Sqrt() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.sqrt(tempVal);
}

// <!-- This function evaluates sine -->
function sin() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.sin(tempVal);
}

// <!-- This function evaluates cosine -->
function cos() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.cos(tempVal);
}

// <!-- This function evaluates tangent -->
function tan() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.tan(tempVal);
}

// <!-- This function evaluates log to the base 10 -->
function log() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.log(tempVal) / Math.LN10;
}

// <!-- This function evaluates factorial -->
function fact() {
  var tempVal = Math.floor(document.getElementById("display").value);
  if (tempVal <= 1) {
    alert("Choose a number larger than 2");
  }
  var k = tempVal;
  while (tempVal != 1) {
    tempVal -= 1;
    k *= (tempVal);
  }
  document.getElementById("display").value = k;
}

// <!-- This function evaluates pi -->
function PI() {
  var tempVal = document.getElementById("display").value;
  document.getElementById("display").value = Math.PI.toFixed(8);
  }

// <!-- This function evaluates the expression in the display area -->
function POW() {
  var tempArr = document.getElementById("display").value.split('');
  console.log(tempArr);
  //New code for more than single digits in calculation
  var loc;
  for (i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === '^') {
      loc = i;
    }
  }
  var base = '';
  var expo = '';
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
    document.getElementById("display").value = Math.pow(base, expo);
  }
  else {
    document.getElementById("display").value = "Enter like this : x^y";
  }
}
catch(e){
  document.getElementById("display").value = e;
}
finally{
  document.getElementById("eq").disabled = false;
  document.getElementById("xPowerY").disabled = true;
  document.getElementById("eq").style.backgroundColor = "#2693e0";
  document.getElementById("xPowerY").style.backgroundColor = "transparent";
}
  

}
