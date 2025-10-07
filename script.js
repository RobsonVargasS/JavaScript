/*let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun!");
console.log(40 + 8 + 23 - 10);

console.log("Robson");
console.log(23);

let firstname = "Robson";

console.log(firstname);
console.log(firstname);
console.log(firstname);

let Robson_Sabrina = "RS"
let PI = 3.1415

let myFirstJob = "Coder";
let myCurrentjob = "Teacher";
let job1 = "Programmer";
let job2 = "teacher";

console.log(myFirstJob);

let Country = "Brazil"
let Continent = "South America"
let Population = "250M"

console.log(Country)
console.log(Continent)
console.log(Population)

//Data Types: Numbers, Strings:"", Boolean: true or false, Undefined: empty value, Null: empty value, Symbol: BigInt: larger integers than Number type can hold.

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "true");

javascriptIsFun = "yes";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

/*let age = 30;
age = 31;
console.log(age);

const birthYear = 1992;



const job = "programmer";

// Basic Operators
// can be math operators,

const ageRob = 2025 - 1992;
const ageSab = 2025 - 1993;
const now = 2025;
console.log(ageRob)
console.log(ageSab)

const firstName = "Robson";
const lastName = "Vargas";
console.log(firstName + lastName)

console.log(firstName + " " + lastName)
/*
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x -1
x--;
console.log(x)

// Comparison Operators

console.log(ageRob > ageSab);
console.log(ageRob < ageSab)

console.log(now - 1991 < now - 2018)

let x, y;
x = y = 25 - 10 - 5 // x =y = 10, x =10
console.log(x, y)


const averageage = (ageRob + ageSab) / 2

console.log(ageRob, ageSab, averageage)

const Robson = "I'm " + firstName + ', a ' + (now - birthYear) + ' years old ' + job + '!';
console.log(Robson);

const RobsonNew = `I'm ${firstName}`;
console.log(RobsonNew)
console.log(`just a string`);


console.log("String with \n\
    multiple \n\
    lines")

console.log(`string
    multiple
    lines`);

console.log(firstName)

*/
/*
const age = 16

if (age >= 18) {
    console.log("can start driveslicense")
}
else {
    const yearsleft = 18 - age;
    console.log(`no today, wait ${yearsleft} years `)

}

const birthyear = 1999
let century

if (birthyear <= 2000) {
    century = 20
} else {
    century = 21
}
console.log(century)
*
//Type conversion
const inputYear = "1991"
console.log(inputYear + 18)
console.log(Number(inputYear) + 18)
console.log(String(23))

//Type Coercion
// + will convert numbers in strings
// - will convert strings in numbers

console.log("i am " + 23 + "Years")
console.log("23" - "10" - 3)
console.log("23" / "2")

let n = "1" + 1 // =11
n = n - 1
console.log(n) // 11-1=10

// 5 falsy values: 0, '', unefined, null , NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Robson"))
console.log(Boolean({}));

const money = 0
if (money) {
    console.log("dont spend it all")
} else {
    console.log("you should get a job")
}

const age = 16
if (age === 18) console.log("you just became a adult(strict)")
if (age == 18) console.log("You just became an adult (loose)")

const favorite = prompt("Whats your favorite number?")
console.log(favorite)

if (favorite === 23) {
    console.log('Coll number 23')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
}
else {
    console.log("not a 23 or 7")
}

if (favorite !== 23)
    console.log("Why no 23?")

*/
// const hasDriversLicense = true;
// const hasGoodVision = true

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// // const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// //     console.log('sara is able to drive')

// // } else {
// //     console.log('someone else should drive')
// // }

// const isTired = false
// console.log(hasDriversLicense && hasGoodVision && isTired)

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
// if (shouldDrive) {
//     console.log('sara is able to drive')

// } else {
//     console.log('someone else should drive')
// }

// const day = "monday"

// switch (day) {
//     case 'monday':
//         console.log('Plan my course');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log("do other thing");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('write code exemple');
//         break;
//     case 'friday':
//         console.log('recording videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('rest');
//         break;
//     default:
//         console.log('not a valid day');
//         break;

// }


// If Else Statement in one line

const age = prompt("What is your age?")
// age >= 18 ? console.log('i like to drink wine') :
//     console.log('I like to drink water');


const drink = age >= 18 ? 'you can drink wine' : 'you can drink water';
console.log(drink);

// const age = 18 

// Exemple if was in normal If Else statemant


if (age >= 18) {
    console.log('wine')
}
else {
    console.log('water')
}

// // One more way

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);


const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
const total = bill + tip
console.log(`Your bill is ${bill}, your tip is ${bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20}, your total is ${total} `)

