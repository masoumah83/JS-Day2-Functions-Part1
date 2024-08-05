// task 1//

function print() {
  console.log("Masoumah Ashknani");
}
print();

// task 2.1//

function printAge(birthYear) {
  let age = 2024 - birthYear;
  console.log(age);
}
let birthYear = 1983;
printAge(birthYear);

// task 2.2//
function printAgeAndName(birthYear, name) {
  let age = 2024 - birthYear;
  console.log(`Hello ${name} you are ${age} years old `);
}

printAgeAndName(1983, "Masoumah");

// task 3//
function printhello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola ${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour ${name}`);
  } else if (language == "tr") {
    console.log(`Marhaba ${name}`);
  }
}

printhello("masoumah", "fr");

//task 5//

function printMax(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1}`);
  } else if (num2 > num1) {
    console.log(`${num2}`);
  }
}
printMax(20, 40);

// function printMax(num1, num2) {
// if (num1 > num2) {
//    console.log(`${num1}`);
// } else
//   console.log(`${num2}`);
// }
