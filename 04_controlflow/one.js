// if statement (#remember if is a keyword), =(operator assignment in anu variable)
// operators:-
// > (greater than)
// >= (greater than or equals to)
// < (less than)
// <= (less than or equals to)
// == (for checking equals to , but no type checking happens.)
// === (for checking equals to , it does type checking), ex:- 2 === 2 (datatype also checked)
// != (not equals to)
// !== (not equals to, type checking also happens)


// const temperature = 55
// if (temperature < 50){
//     console.log("no temperature is less than 50")
// } else {
//     console.log("yes temperature is greater than 50")
//     }

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// } // block scope
// console.log(`User Power: ${power}`) // output: power is not defined

const balance = 1000
//if(balance > 500) console.log("balance is greater than 500");// implicite scope

//Nested conditions

if(balance < 500){
    console.log("balance is less than 500");
} else if (balance < 750){
    console.log("balance is less than 500");
} else if (balance < 900){
    console.log("balance is less than 500");
} else {
    console.log("balance is less than 1200")
}

const userloggedin = true
const debitcard = true
const userloggedfromgoogle = false
const userloggedinfromemail = true 

if(userloggedin && debitcard){
    console.log("Allow to buy");
}

if(userloggedfromgoogle || userloggedinfromemail){
    console.log("user log in");
}