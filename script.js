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
*/
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

