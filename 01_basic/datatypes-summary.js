//****************************Primitive Data Types******************************
// 7 types of primitive data types in JavaScript
// Number, String, Boolean, Null, Undefined, Symbol, BigInt.

let name = 'Awnish' //string

const score= 100
const socrevalue =100.5 //number

const IsloggedIn = true //boolean
const outsidetemperature = null //null
let userEmail; /*undefined or */ let userEmail1 = undefined

const id = Symbol('123') //symbol unique value
const anotherId = Symbol('123') //symbol unique value
//console.log(id === anotherId)

const bigNumber = 1234567890123456789012345678901234567890n //bigint

//********************Reference Data Types(Non-Primitive)**********************
// reference data types are objects and arrays. They are mutable and can hold multiple values. Examples include Object, Array, Function, Date, etc.

const marray= ["Awnish", "Jay", "Aniket","123", 123, true, undefined,null ] //array
//console.log(typeof marray)
//console.log(Array.isArray(marray))
//console.log(marray.length) /* returns the length of array (index= length-1)*/
//console.table(marray)

//objects:-
const myobject = {
    name: 'Awnish',
    age: 22,
    mobileno: 1234567890
}

//functions:-
const myfunction= function(){
    console.log("Awnish dubey here")
}
console.log(typeof myfunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3