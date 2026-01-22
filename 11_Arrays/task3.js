let zahlen = [5, 12, 8, 44, 19, 3, 27];

let größteZahl = zahlen[0];

for (let i = 0; i < zahlen.length; i = i + 1) {
    if (zahlen[i] > größteZahl) {
        größteZahl = zahlen[i];
    }
}

console.log("Die größte Zahl in der Liste ist: " + größteZahl);