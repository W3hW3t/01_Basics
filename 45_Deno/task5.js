const eingabe = prompt("Wie viel Grad hat es gerade (in Celsius)?");
const temperatur = Number(eingabe);

// 2. Logik zur Empfehlung
if (isNaN(temperatur)) {
    console.log("Bitte gib eine gültige Zahl für die Temperatur ein.");
} else if (temperatur < 0) {
    console.log("Es ist eiskalt! Drinnen bleiben.");
} else if (temperatur < 15) {
    console.log("Ziemlich kühl. Warm anziehen!");
} else if (temperatur < 25) {
    console.log("Das Wetter ist super. Raus gehen!");
} else if (temperatur < 35) {
    console.log("Es ist heiß. Baden gehen!");
} else {
    // Alles über 35 Grad
    console.log("Viel zu heiß! Ab in die Kühlbox!");
}