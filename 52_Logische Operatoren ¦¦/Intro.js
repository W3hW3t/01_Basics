let a = 80;
let b = 90;

// (a==80) && (b==90) --> true
// (a==81) && (b==90)
// (false) && (true) --> false

// (a==80) || (b==90)
// (true) || (true) --> true

// (a==70) || (b==90) --> true
// (a==70) || (b==100) --> false

if (a == 81 || b == 91)  {
    console.log("It's true");
} else {
    console.log("It's false");
}