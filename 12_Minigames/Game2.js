const optionen = ["schere", "stein", "papier"];

let spielerWahl = prompt("Schere, Stein oder Papier?").toLowerCase();
let computerWahl = optionen[Math.floor(Math.random() * 3)];

console.log("Du: " + spielerWahl + " | Computer: " + computerWahl);

if (spielerWahl === computerWahl) {
    console.log("Unentschieden!");
} else if (
    (spielerWahl === "stein" && computerWahl === "schere") ||
    (spielerWahl === "schere" && computerWahl === "papier") ||
    (spielerWahl === "papier" && computerWahl === "stein")
) {
    console.log("Du gewinnst!");
} else {
    console.log("Der Computer gewinnt!");
}