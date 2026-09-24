const user = {
    username: "Awnish",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);// .this is used in current context
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
console.log(this) // expected output is {}emppty object because it works only on objects

const test = {
    prop: 42,
    function() {
        return this.prop
    }
}
console.log(test.function())// expected oyutput is 42

//*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#Arrow functions*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*

const add= (num1, num2) =>{
    return num1 + num2 // this is a explicit return because in {curly braces} return keyword is used.
}
console.log(add(4, 4))

const add1= (num1, num2) =>  (num1 + num2)// also a array function, also return keyword is used for only curly braces not in parenthesis. this is a implicit return

console.log(add1(4, 4))

const obj = (String) => ({username: "Awnish"})// to return a object in arrow function we have to rapup this object into parenthesis 
console.log(obj()) // output { username: 'Awnish'}