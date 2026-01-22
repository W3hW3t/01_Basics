let summeUngerade = 0;

for (let i = 1; i <= 50; i = i + 1) {
    if (i % 2 !== 0) {
        summeUngerade = summeUngerade + i;
    }
}

console.log("Summe der ungeraden Zahlen von: " + summeUngerade);