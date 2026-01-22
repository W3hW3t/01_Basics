let anzahl = Number(prompt("Wie viele Zahlen möchtest du eingeben?"));
let total = 0;

for (let i = 1; i <= anzahl; i = i + 1) {
    let eingabe = Number(prompt("Gib Zahl " + i + " ein:"));
    total = total + eingabe;
}

let durchschnitt = total / anzahl;
console.log("Der Durchschnitt ist: " + durchschnitt);