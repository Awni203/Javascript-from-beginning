
function SayMyName(){
    console.log("A");
    console.log("w");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
}
// SayMyName()

// function addTwoNumbers(number1, number2){// function variablename(parameters){}
//     console.log(number1+number2);
// }

// addTwoNumbers(3, 4)// variablename used in function(Arguments)// here function addTwoNumbers is called and we inputted 2 two number arguments which is 3 & 4.

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result //after return call in any function no other line is executable.
    return number1+number2
}


const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage (Username){
    if(!Username){// (username ===undefined) or (!Username)both are same 
        console.log("Please enter a Username");
        return 
    }
    return `${Username} just logged in`
}

// console.log(loginUserMessage("Awnish"));
console.log(loginUserMessage());// expected output undefined just logged in.

function CalculateCartPrice(...num1){// ... is called rest operator and spread both based on use cases.
    return num1
}

// console.log(CalculateCartPrice(200, 400, 500))

const user = {
    username: "Awnish",
    price: 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: 'sam',
    price: 399
})

const mynewArray = [200,  400, 600, 100]
function returnsecondValue(getarray){
    return getarray[1]
}
// console.log(returnsecondValue(mynewArray))
console.log(returnsecondValue([200, 500, 400, 600, 1000]))