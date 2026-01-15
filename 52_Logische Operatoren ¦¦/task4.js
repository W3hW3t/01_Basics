let age = prompt("Wie alt bist du?");
let money = prompt("Wie viel Geld hast du (in Euro)?");

if (age >= 18 && money >= 12) {
    console.log("Ticket purchased");
} else if (age >= 18 && money < 12) {
    console.log("Not enough money");
} else {
    console.log("Too young to watch the movie");
}