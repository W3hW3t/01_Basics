let speed = prompt("Geschwindigkeit:");
let trafficLevel = prompt("Verkehr (1-10):");

if (speed > 80 || trafficLevel > 7) {
    console.log("Slow down!");
} else {
    console.log("You are good to go.");
}