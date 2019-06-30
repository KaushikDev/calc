"use strict";
var timer, i;
var flag = false;
var inputs = document.getElementsByTagName("button");
<!-- Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area-->
function onLoad(){
document.getElementById("display").value="ON";
/*
 timer=setInterval(function(){
 
 setTimeout(function(){
 document.getElementById("display").value="";
 }, 1000);
 document.getElementById("display").value="_";
 
 }, 2000);
*/
}
<!-- Separate function for key '^'-->
function carat(val){
var tempVal = document.getElementById("display").value;
//clearInterval(timer);
if(tempVal==="ON"){
endCalc();
}
else{
document.getElementById("display").value+=val;
for (i = 0; i < inputs.length; i++) {
  if(inputs[i].id === '='){
  document.getElementById(inputs[i].id).disabled= true;
  document.getElementById(inputs[i].id).style.backgroundColor= "gray";
  }
}
}
}
<!-- Function key : This function puts the value of a numeric or arithmetic operator key pressed in to the display area-->
function key(val){
var tempVal = document.getElementById("display").value;
//clearInterval(timer);
if(tempVal==="ON"){
document.getElementById("display").value="";
}
switch(val){
case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '0':
document.getElementById("display").value+=val;
break;
case '+': case '-': case '*': case '/': case '%': case '.': case '(' : case ')' :
var tempVal;
tempVal=document.getElementById("display").value;
if(tempVal=""){
document.getElementById("display").value="";
}
else if(tempVal !='+' && tempVal !='-' && tempVal !='*' && tempVal !='/' && tempVal !='%' && tempVal !='.'){
document.getElementById("display").value+=val;
}
else {
document.getElementById("display").value=tempVal;
}
}
}
<!-- Function allClear : This function clears everything in the display area-->
function allClear(){
document.getElementById("display").value="ON";
for (i = 0; i < inputs.length; i++) {
 
  document.getElementById(inputs[i].id).disabled= false;
  document.getElementById(inputs[i].id).style.backgroundColor = "aqua";
  }
}
<!-- This function clears the entry one by one -->
function pop(){
var dispArr=(document.getElementById("display").value).split('');
dispArr.pop();
document.getElementById("display").value=dispArr.join('');
if(dispArr.length===0){
onLoad();
}
}
<!-- This function evaluates the expression in the display area -->
function ans(){
var tempVal=document.getElementById("display").value;
try {
    	document.getElementById("display").value=eval(tempVal);
		
		} catch (e) {
        document.getElementById("display").value="Wrong Expression !!"; 
			
}
finally{
endCalc();
}
}
<!-- This function evaluates the expression in the display area -->
function endCalc(){
for (i = 0; i < inputs.length; i++) {
  if(inputs[i].id === 'AC'){
  document.getElementById(inputs[i].id).disabled= false;
  }
  else{
  document.getElementById(inputs[i].id).disabled= true;
  document.getElementById(inputs[i].id).style.backgroundColor = "gray";
}
  }
}
<!-- This function evaluates the expression in the display area -->
function Sqrt(){
var tempVal=document.getElementById("display").value;
document.getElementById("display").value=Math.sqrt(tempVal);
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function sin(){
var tempVal=document.getElementById("display").value;
document.getElementById("display").value=Math.sin(tempVal);
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function cos(){
var tempVal=document.getElementById("display").value;
document.getElementById("display").value=Math.cos(tempVal);
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function tan(){
var tempVal=document.getElementById("display").value;
document.getElementById("display").value=Math.tan(tempVal);
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function log(){
var tempVal=document.getElementById("display").value;
//document.getElementById("display").value=Math.log10(tempVal);
//+++++++Math.log10(tempVal) is not used because it is not supported on IE. Hence the following funcion is used.
document.getElementById("display").value=Math.log(tempVal)/Math.LN10 ;	
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function fact(){
var tempVal=Math.floor(document.getElementById("display").value);
if(tempVal<=1){
alert("Choose a number larger than 2");
}
var k =tempVal;
while(tempVal!=1){
tempVal-=1;
k*=(tempVal);
}
document.getElementById("display").value=k;
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function PI(){
//clearInterval(timer);
var tempVal=document.getElementById("display").value;
document.getElementById("display").value=Math.PI;
endCalc();
}
<!-- This function evaluates the expression in the display area -->
function POW(){
var tempArr=document.getElementById("display").value.split('');
console.log(tempArr);
//New code for more than single digits in calculation
var loc;
for(i=0;i<tempArr.length;i++){
if(tempArr[i]==='^'){
loc = i;
}
}
var base = '';
var expo = ''; 
for(i=0;i<loc;i++){
base += tempArr[i]; 
}
for(i=(loc+1);i<tempArr.length;i++){
expo += tempArr[i];
}
console.log("base is  : "+base);
console.log("expo is  : "+expo);
//
//if(!isNaN(tempArr[0]) && tempArr[1]==='^' &&  !isNaN(tempArr[2])){
//document.getElementById("display").value=Math.pow(tempArr[0], tempArr[2]);
//}
if(!isNaN(base) && !isNaN(expo)){
document.getElementById("display").value=Math.pow(base, expo);
}
else {
document.getElementById("display").value="Enter like this : x^y";
}
endCalc();
}