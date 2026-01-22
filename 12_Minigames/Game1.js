let nochma = "j";

while (nochma == "j") {
    prompt("Drücke Enter zum Würfeln");


    let spieler = Math.floor(Math.random() * 6) + 1;
    let computer = Math.floor(Math.random() * 6) + 1;

    console.log("Du hast eine " + spieler + " gewürfelt.");
    console.log("Der Computer hat eine " + computer + " gewürfelt.");

    if (spieler > computer) {
        console.log("Du hast gewonnen!");
    } else if (computer > spieler) {
        console.log("Der Computer hat gewonnen!");
    } else {
        console.log("Unentschieden!");
    }

    nochma = prompt("Nochmal? (j/n)");
}