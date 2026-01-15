// 1. Das Alter vom Benutzer abfragen
const eingabe = prompt("Wie alt bist du?");
const alter = Number(eingabe);

// 2. Die Logik mit if-Anweisungen
// Wir definieren hier: jung (< 20), mittelalt (20-59), alt (60+)
if (isNaN(alter)) {
    console.log("Bitte gib eine gültige Zahl für das Alter ein.");
} else if (alter < 20) {
    console.log("Du bist jung.");
} else if (alter < 60) {
    console.log("Du bist mittelalt.");
} else {
    console.log("Du bist alt.");
}