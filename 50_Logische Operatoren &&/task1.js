// 1. Score abfragen
const eingabe = prompt("Wie viele Punkte hast du erreicht (0-100)?");
const score = Number(eingabe);

// 2. Die Logik gemäß deiner Vorlage
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Bitte gib eine Zahl zwischen 0 und 100 ein.");
} else if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    // Deckt den Bereich 80 bis 89 ab
    console.log("Grade: B");
} else if (score >= 70) {
    // Deckt den Bereich 70 bis 79 ab
    console.log("Grade: C");
} else if (score >= 60) {
    // Deckt den Bereich 60 bis 69 ab
    console.log("Grade: D");
} else {
    // Alles unter 60
    console.log("Grade: F");
}