let arr = [12, 45, 23, 10, 5];
let summearr = 0;

for (let i = 0; i < arr.length; i = i + 1) {
    summearr = summearr + arr[i];
}

let ergebnis = summearr / arr.length;
console.log("Der Durchschnitt der arr ist: " + ergebnis);