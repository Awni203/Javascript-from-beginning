let score = "34xyz" 

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof (valueInNumber));
console.log(valueInNumber)

//33 => 33
//34xyz => NaN (Not a Number)
// true => 1 : False => 0


let IsLoggedIn = "1"
let booleanValue = Boolean(IsLoggedIn)
console.log(booleanValue);

// 1 => true
// 0 => false
// "" => false
// null => false
// undefined => false
// NaN => false
// "string" => true

let numbers= 33.5
let conversion= String(numbers);
console.log(numbers)
console.log(typeof(conversion))


// ****************************************operations*****************************************

let value1= 34
let negativevalue= -value1
console.log(value1)
console.log(typeof (negativevalue))

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion