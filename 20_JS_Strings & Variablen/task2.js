let banana = "Banana"
let apple = "Apple"

let bananaPricePerKilo = 2.14
let applePricePerKilo = 3.43

let avgAppleWeight = 0.34;
let avgBananaWeight = 0.22;

let weightOf8Apples = avgAppleWeight * 8;
let priceOf8Apples = applePricePerKilo * (weightOf8Apples);

let weightOf17Bananas = avgBananaWeight * 17;
let priceOf17Bananas = bananaPricePerKilo * (weightOf17Bananas);

let pricePerTonneApples = applePricePerKilo * 1000
let pricePerTonneBananas = bananaPricePerKilo * 1000

console.log(priceOf8Apples)
console.log(priceOf17Bananas)
console.log(pricePerTonneApples)
console.log(pricePerTonneBananas)