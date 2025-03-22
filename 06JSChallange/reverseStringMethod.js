// This is the simplest way to reverse a string

function reverseStrint(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStrint("Hello") + " --01");
console.log(reverseStrint("Tushar Chaudhary") + " --01");

// Using For loop

function sreverseString(str) {
    let reversed = '';
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;
}

console.log(sreverseString("Reverse a string with loop") + "--02")
console.log(sreverseString("Testing") + "--02");

// Using recursion

function treverseString(str) {
    if (str === "") return "";
    return treverseString(str.substring(1)) + str.charAt(0);
}

console.log(treverseString("devtushar") + "--03");

// Using reduce
function freverseString(str) {
    return str.split('').reduce((rev, char) => char + rev, "");
}

console.log(freverseString("asam") + "--04");

//Using ES6 Spread Opearator

const fireverseString = str => [...str].reverse().join('');
console.log(fireverseString("Hello") +"--05")