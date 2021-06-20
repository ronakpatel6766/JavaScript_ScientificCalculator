function one(input) {
    calc.dis.value +='1';
}

function two(input) {
    calc.dis.value +='2';
}

function three(input) {
    calc.dis.value +='3';
}

function four(input) {
    calc.dis.value +='4';
}

function five(input) {
    calc.dis.value +='5';
}

function six(input) {
    calc.dis.value +='6';
}

function seven(input) {
    calc.dis.value +='7';
}

function eight(input) {
    calc.dis.value +='8';
}

function nine(input) {
    calc.dis.value +='9';
}

function zero(input) {
    calc.dis.value +='0';
}

function decimalPoint(input) {
    calc.dis.value +='.';
}

function addition(input) { 
    calc.dis.value +='+';   
}

function substraction(input) {
    calc.dis.value +='-';
}

function multiplication(input) {
    calc.dis.value +='*';
}

function division(input) {
    calc.dis.value +='/';
}

function cos(input) {
    calc.dis.value = Math.cos(calc.dis.value);
}

function sin(input) {
    calc.dis.value = Math.sin(calc.dis.value);
}

function tan(input) {
    calc.dis.value = Math.tan(calc.dis.value);
}

var val = 0.0;
function percent(input) {
  val = calc.dis.value;
  calc.dis.value /= 100;
}

function leftBracket(input) {
    calc.dis.value +='(';
}

function rightBracket(input) {
    calc.dis.value +=')';
}

function square(input) {
    calc.dis.value = Math.pow(calc.dis.value,2);
}

function log(input) {
    calc.dis.value = Math.log(calc.dis.value);
}

function squareRoot(input) {
    calc.dis.value = Math.sqrt(calc.dis.value);
}

function plusorMinus(input) {
    if (calc.dis.value.substring(0,1) == "-") {
         calc.dis.value = calc.dis.value.substring(1,calc.dis.value.length); 
    }
    else {
        calc.dis.value = "-" + calc.dis.value;
    }
} 

function deletedigit(input) {
    calc.dis.value = calc.dis.value.substring(0,calc.dis.value.length-1);
}

function exp(input) {
    calc.dis.value = Math.exp(calc.dis.value);
}

function ans(input) {
    calc.dis.value = eval(calc.dis.value);
}

function pi(input) {
    calc.dis.value += Math.PI;
}

