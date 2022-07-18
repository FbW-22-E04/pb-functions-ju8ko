//1
function sumIntFrom1ToN(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log("Q1:", sum);
}
sumIntFrom1ToN(4);

//2
function sumOfCubes(num1, num2, num3) {
  const result = num1 ** 3 + num2 ** 3 + num3 ** 3;
  console.log("Q2:", result);
}
sumOfCubes(1, 5, 9);

//3 ??????????
function isStrStartOfWord(string, word) {
  if (word.search(string) == 0) {
    console.log("Matched");
  } else {
    console.log("Don't matched");
  }
}
console.log("Q3:", isStrStartOfWord("bu", "button"));

//4
function isLEQZero(num) {
  console.log(num <= 0 ? true : false);
}
isLEQZero(2);

//5
function countOccurrences(str, letter) {
  counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}
console.log("Q5", countOccurrences("Hello", "l"));

//6
function calcBaseToExponent(num1, num2) {
  const result = num1 ** num2;
  console.log(result);
}
calcBaseToExponent(3, 3);

//7
function dogAge(num) {
  console.log("Q7:", num * 7);
}
dogAge(2);

//8
function calcLifetimeSupply(age, snacksPerDay, maxAge) {
  const yearsToLeft = maxAge - age;
  const snacksAmount = yearsToLeft * (snacksPerDay * 365.25);
  if (age <= maxAge) {
    console.log(
      `Q8: The snack company should provide you with ${Math.ceil(
        snacksAmount
      )} units, until you are a ripe old age of ${maxAge}. Happy snacking!`
    );
  } else {
    console.log(`Sorry, but you are older then ${maxAge}.`);
  }
}
calcLifetimeSupply(66, 0.58, 65);

//9
function isWaldoHere(string) {
  if (string.includes("Waldo" || "waldo")) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isWaldoHere("I found you Waldo!");

//10
function isEqualSlices(
  numberOfSlices,
  numberOfRecipients,
  slicesForEachPerson
) {
  console.log(
    "Q10",
    numberOfRecipients * slicesForEachPerson <= numberOfSlices ? true : false
  );
}
isEqualSlices(8, 3, 3);
isEqualSlices(8, 3, 2);
