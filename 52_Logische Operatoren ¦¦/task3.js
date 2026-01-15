let grade = prompt("Note (0-100):");
let attendance = prompt("Anwesenheit (0-100):");
let extraCredit = prompt("Zusatzpunkte (0-10):");

if (grade >= 80 && (attendance >= 90 || extraCredit >= 5)) {
    console.log("Eligible for advanced exam.");
} else {
    console.log("Not eligible for advanced exam.");
}