let summe5 = 0;

for (let i = 1; i <= 100; i = i + 1) {
    if (i % 5 == 0) {
        summe5 = summe5 + i;
    }
}

console.log("Summe der Vielfachen von 5: " + summe5);