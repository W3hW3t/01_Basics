// 1. Benutzereingaben abfragen
const eingabe1 = prompt("Gib die erste Zahl ein:");
const eingabe2 = prompt("Gib die zweite Zahl ein:");
const operator = prompt("Wähle eine Rechenart (+, -, *, /):");

// 2. Eingaben in Zahlen umwandeln
const zahl1 = Number(eingabe1);
const zahl2 = Number(eingabe2);

let ergebnis;

// 3. Logik mit if...else if...else
if (operator === "+") {
    ergebnis = zahl1 + zahl2;
} else if (operator === "-") {
    ergebnis = zahl1 - zahl2;
} else if (operator === "*") {
    ergebnis = zahl1 * zahl2;
} else if (operator === "/") {
    // Kurze Prüfung, ob durch 0 geteilt wird
    if (zahl2 === 0) {
        ergebnis = "Fehler: Division durch Null ist nicht erlaubt!";
    } else {
        ergebnis = zahl1 / zahl2;
    }
} else {
    ergebnis = "Ungültige Rechenart!";
}

// 4. Ergebnis ausgeben
console.log(`-----------------------`);
console.log(`Ergebnis: ${ergebnis}`);