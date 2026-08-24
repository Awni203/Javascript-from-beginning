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
