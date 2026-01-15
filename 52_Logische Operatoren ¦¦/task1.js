// 1. Variablen erstellen (Werte können hier zum Testen geändert werden)
const temperature = Number(prompt("Wie viel Grad (°C) hat es?"));
const humidity = Number(prompt("Wie hoch ist die Luftfeuchtigkeit (%)?"));

// 2. Die Logik mit && (UND) verknüpfen
if (isNaN(temperature) || isNaN(humidity)) {
    console.log("Bitte gib gültige Zahlen ein.");
} else if (temperature >= 20 && temperature <= 25 && humidity < 60) {
    // Wenn Temp zwischen 20-25 UND Feuchtigkeit < 60
    console.log("Perfect day for outdoor activities!");
} else if (temperature > 35 || temperature < 0) {
    // Ein kleiner Zusatz für extreme Werte (optional)
    console.log("Consult a doctor before exercising");
} else {
    // In allen anderen Fällen
    console.log("Maybe stay indoors today.");
}