let a = prompt("Startzahl (a):");   
let b = prompt("Endzahl (b):");

let start = a;
let ende = b;

if (a > b) {
    start = b;
    ende = a;
}

let summeAB = 0;
for (let i = start; i <= ende; i = i + 1) {
    summeAB = summeAB + i;
}

console.log("Die Summe zwischen" + a + " und " + b + " ist: " + summeAB);