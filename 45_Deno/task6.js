// 1. Den Benutzer nach seinem Wunschgetränk fragen
console.log("Verfügbare Getränke: Cola, Wasser, Bier, Tee");
const auswahl = prompt("Welches Getränk möchtest du bestellen?");

// 2. Die Auswahl prüfen und reagieren
// .toLowerCase() sorgt dafür, dass auch "cola" oder "COLA" erkannt wird
const getraenk = auswahl ? auswahl.trim().toLowerCase() : "";

if (getraenk === "cola") {
    console.log("Danke für deine Bestellung von Cola.");
} else if (getraenk === "wasser") {
    console.log("Danke für deine Bestellung von Wasser.");
} else if (getraenk === "bier") {
    console.log("Danke für deine Bestellung von Bier.");
} else if (getraenk === "tee") {
    console.log("Danke für deine Bestellung von Tee.");
} else {
    console.log("Tut mir leid, dieses Getränk haben wir nicht im Sortiment.");
}