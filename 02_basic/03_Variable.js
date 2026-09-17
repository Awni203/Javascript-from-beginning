// Object.create //this is a constructore type of object, it has singleton 


//object literals

const sym = Symbol("Key1")

const jsuser = {
    name: "ABCD", // name is key and "Awnish" is a string value which is contained by name key.key in object can contain any type of value either string or any datatype
    age: 18,
    "full name": "Awnish dubey",
    [sym]: "mykey1",// to declare a symbole in object always use [] this bracket 
    location: "New Delhi",
    email: "xyz@gmail.com",
    isloggedIn: false,
    lastdaylogin: ["Monday", "Saturday"]
}
//there are two methode to print object (jsuser.email) another is (jsuser[email]) best one is (jsuser[email]) because we can print symole and string key's datatypes.
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[sym])


jsuser.email = "xyz@gmail.com"// to change(or to mutate) the value of any key in an decleared object.
// Object.freeze(jsuser)// to freeze or make the object's value unchangable (or immutable).
jsuser.name = "Awnish"// name will not be changed in object(jsuser) because we freeze the object.
// console.log(jsuser)


//to use function with the object => normal function call 

jsuser.greeting = function(){
    console.log(`Hello js User, ${this.name}`)
}

//arrow function call 
jsuser.greetings = () => {
    console.log("Hello JS Users")
}

console.log(jsuser.greeting())
console.log(jsuser.greetings())