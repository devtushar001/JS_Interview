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