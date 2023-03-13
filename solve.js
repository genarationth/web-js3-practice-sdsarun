// ================= Problem - 1 =====================
// ES6 version 1 shorter.
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// A little bit longer.
const addV2 = (a, b) => {
    return a + b;
}
const subtractV2 = (a, b) => {
    return a - b;
}

const multiplyV2 = (a, b) => {
    return a * b;
}

const divideV2 = (a, b) => {
    return a / b;
}

// Again a little bit longer.
const addV3 = function (a, b) {
    return a + b;
}
const subtractV3 = function (a, b) {
    return a - b;
}

const multiplyV3 = function (a, b) {
    return a * b;
}

const divideV3 = function (a, b) {
    return a / b;
}

// Old School version.
function addV4(a, b) {
    return a + b;
}

function subtractV4(a, b) {
    return a - b;
}

function multiplyV4(a, b) {
    return a * b;
}

function divideV4(a, b) {
    return a / b;
}


// ================= Problem - 2 =====================
const info = (firstName, location, hobby) => {
    console.log("Hi, my name is " + firstName + "I live in " + location + " and enjoy " + hobby);
}



// Testing...
let a = 30, b = 50;
console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));

info("Sarun", "Saraburi", "Walking along the roads.");