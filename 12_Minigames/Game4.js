let bomben = ["1 2", "3 4", "0 1"]; 
let amLeben = true;

while (amLeben) {
    let zug = prompt("Gib Koordinaten ein (0-4 0-4), z.B. '2 3':");

    if (bomben.includes(zug)) {
        console.log("Spiel vorbei. Explodiert!");
        amLeben = false;
    } else {
        console.log("Sicher! Nächster Zug.");
    }
}