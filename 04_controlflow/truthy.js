const useremail = "awnish@gmail.com"

if(useremail){
    console.log("Email found")// the string is considered as  true value for this condition and it will log this value.
}
else{
    console.log("Email not found")
}

// falsy values
// false, NaN, 0, -0, "", undefined, BigInt 0n, null. rest all is truthy 

// truthy value
// "0", 'false', function(){} - empty function, [], {}, " "

// false == 0, 0== '', false == "" // their output will always be in conditions= true 

// to check array is empty or not using if else condition
const arr = []
if (arr.length === 0){
    console.log("Array is Empty")
}

// to check if object is empty using conditions
const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalesccing Operator (??): basically works on null & undefined

let val1;
// val1 = 5 ?? 10 // output = 5
// val1 = null ?? 10 output = 10
// val1 = undefined ?? 15 // output = 15

val1 = null ?? 10 ?? 20 // output = 10(take first value as output)
console.log(val1)

// Terniary Operator

// consition ? true : false

const iceTePrice = 100;
iceTePrice <= 80 ? console.log("less than 80") : console.log("more than 80")