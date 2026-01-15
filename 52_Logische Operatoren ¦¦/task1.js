let temperature = prompt("Temperatur:");
let humidity = prompt("Luftfeuchtigkeit:");

if (temperature >= 20 && temperature <= 25 && humidity < 60) {
    console.log("Perfect day for outdoor activities!");
} else if (temperature > 35 || temperature < 0) {
    console.log("Consult a doctor before exercising");
} else {
    console.log("Maybe stay indoors today.");
}