function dis(val){
    const display = document.querySelector(".result");
    display.value += val;
}

function solve() {
      const display = document.querySelector(".result");
      let x =display.value;
      let y = eval(x);
      display.value = y ;
}
function del() {
      const display = document.querySelector(".result");
      display.value = display.value.slice(0, -1);
    
}
function x2() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x3() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x4() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x5() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x6() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x7() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function x9() {
    const display = document.querySelector(".result");
    display.value = Math.pow (display.value , 2)
}
function sin(){
    const display = document.querySelector(".result");
    display.value = Math.sin(display.value*(Math.PI/180));
}
function sinh(){
    const display = document.querySelector(".result");
    display.value = Math.sinh(display.value);
}
function asin(){
    const display = document.querySelector(".result");
    display.value = Math.sinh(display.value);
}
function asinh(){
    const display = document.querySelector(".result");
    display.value = Math.asinh(display.value);
}



function cos(){
    const display = document.querySelector(".result");
    display.value = Math.cos(display.value*(Math.PI/180));
}
function cosh(){
    const display = document.querySelector(".result");
    display.value = Math.cosh(display.value);
}
function acos(){
    const display = document.querySelector(".result");
    display.value = Math.acos(display.value);
}
function acosh(){
    const display = document.querySelector(".result");
    display.value = Math.acosh(display.value);
}
function tan(){
    const display = document.querySelector(".result");
    display.value = Math.tan(display.value*(Math.PI/180));
}
function tanh(){
    const display = document.querySelector(".result");
    display.value = Math.tanh(display.value);
}
function atan(){
    const display = document.querySelector(".result");
    display.value = Math.atan(display.value);
}
function atanh(){
    const display = document.querySelector(".result");
    display.value = Math.atanh(display.value);
}
function cot(){
    const display = document.querySelector(".result");
    display.value =1/  Math.tan(display.value*(Math.PI/180));
}
function cotx(){
    const display = document.querySelector(".result");
    display.value = 1/Math.tanh(display.value);
}
function Log(){
    const display = document.querySelector(".result");
    display.value = Math.log10(display.value);
}
function In(){
    const display = document.querySelector(".result");
    display.value = Math.log(display.value);
}
function cuberoot(){
    const display = document.querySelector(".result");
    display.value = Math.cbrt(display.value );
}
function fourroot(){
    const display = document.querySelector(".result");
    display.value = Math.pow(display.value , 1/4);
}
function fiveroot(){
    const display = document.querySelector(".result");
    display.value = Math.pow(display.value , 1/5);
}
function squarroot(){
    const display = document.querySelector(".result");
    display.value = Math.sqrt(display.value );
}
function pressExp() {
     const display = document.querySelector(".result");
    display.value += "**";  
}
function allClear() {
    document.querySelector(".result").value = "";
}
function ANS() {
    const display = document.querySelector(".result");
    display.value += lastAnswer;
}
function insertE() {
    let display = document.getElementById("display");
    display.value += "e";
}



