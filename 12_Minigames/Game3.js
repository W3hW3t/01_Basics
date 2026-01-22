let geheimnis = Math.floor(Math.random() * 100) + 1;
let rateVersuch = 0;

while (rateVersuch != geheimnis) {
    rateVersuch = Number(prompt("Rate eine Zahl zwischen 1 und 100:"));

    if (rateVersuch > geheimnis) {
        console.log("Zu hoch!");
    } else if (rateVersuch < geheimnis) {
        console.log("Zu niedrig!");
    } else {
        console.log("Genau richtig! Du hast gewonnen!");
    }
}