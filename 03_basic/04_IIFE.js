// Immediately Invocked Function Expression (IIFE)

(function  database() { // regular function
    //Named IIFE
    console.log(`DB CONNECTED`);
})(); // to end the IIFE ";" is used to stop it

//database() // instead of calling the function like this we can just rapup the whole function inside a parenthesis and add a blank parenthesis at the end of the function which we call (IIFE)to avoide global scope's pollution created in the javascript and to call that function immediately.

( (name) =>{ // arrow function.
    //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )('Awnish')



