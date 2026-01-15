let zahl1 = prompt("Erste Zahl:");
let zahl2 = prompt("Zweite Zahl:");
let rechenart = prompt("Rechenart (+, -, *, /):");

if (rechenart == "+") {
    let ergebnis = zahl1 + zahl2; // Achtung: Siehe Hinweis unten!
    console.log("Ergebnis: " + ergebnis);
} else if (rechenart == "-") {
    console.log("Ergebnis: " + (zahl1 - zahl2));
} else if (rechenart == "*") {
    console.log("Ergebnis: " + (zahl1 * zahl2));
} else if (rechenart == "/") {
    console.log("Ergebnis: " + (zahl1 / zahl2));
} else {
    console.log("Diese Rechenart kenne ich nicht.");
}