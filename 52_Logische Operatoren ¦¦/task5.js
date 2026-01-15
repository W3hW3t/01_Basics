let age = prompt("Wie alt bist du?");
let heartRate = prompt("Puls (bpm):");

if (age < 30 && heartRate < 100) {
    console.log("Light exercise");
} else {
    console.log("Check other recommendations");
}