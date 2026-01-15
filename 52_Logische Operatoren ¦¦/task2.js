// 1. Variablen erstellen und Eingaben abfragen
const speed = Number(prompt("Wie schnell fährst du (in km/h)?"));
const trafficLevel = Number(prompt("Wie hoch ist das Verkehrsaufkommen (1-10)?"));

// 2. Logik mit || (ODER) prüfen
if (isNaN(speed) || isNaN(trafficLevel)) {
    console.log("Bitte gib gültige Zahlen ein.");
} else if (speed > 80 || trafficLevel > 7) {
    // Wenn ENTWEDER zu schnell ODER zu viel Verkehr
    console.log("Slow down!");
} else {
    // Wenn beides im grünen Bereich ist
    console.log("You are good to go.");
}