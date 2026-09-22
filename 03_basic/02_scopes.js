// var c = 300;

let a = 300;
if (true) { // block scope :- it is a block scope because it is written inside the {curly braces}.
    let a = 10;
    const b = 20;
    console.log("INNER:",a);// output will be INNER: 10
}

// console.log(a);// output will be 300 because we are calling a global scope 
// console.log(b);
// console.log(c);

function one(){
    const username = "Awnish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) // cannot executed, gives a error because we hold the function value inside a variable
const addTwo = function(num){
    return num + 2
}
