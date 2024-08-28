function sortByBirth(arr) {
    return arr.sort(function(a, b) {
        let birthYearA = parseInt(a.split(' ')[1]);
        let birthYearB = parseInt(b.split(' ')[1]);
        return birthYearA - birthYearB;
    });
}
let namesAndYears = ["Ali 1990", "Mahir 1985", "Leyla 2000", "Aynur 1995"];
let sorted = sortByBirth(namesAndYears);
console.log(sorted);
console.log('-------------------');
function addTax(prices) {
    let taxRate = 0.20;
    let pricesWithTax = [];
    for (let i = 0; i < prices.length; i++) {
        let priceWithTax = prices[i] * (1 + taxRate);
        pricesWithTax.push(priceWithTax);
    }
    return pricesWithTax;
}
let priceArray = [100, 200, 150, 50];
let pricesWithTax = addTax(priceArray);
console.log(pricesWithTax);
console.log("__________");

function countEvensAndOdds(numbers) {
    let evensCount = 0;
    let oddsCount = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evensCount++;
        } else {
            oddsCount++;
        }
    }
    return {
        evens: evensCount,
        odds: oddsCount
    };
}
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = countEvensAndOdds(number);
console.log(number);
console.log(`Cüt ededlerin sayi: ${result.evens}`);
console.log(`Tək ededlerin sayi: ${result.odds}`);
