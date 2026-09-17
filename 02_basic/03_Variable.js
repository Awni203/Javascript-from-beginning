// Object.create //this is a constructore type of object, it has singleton 


//object literals

const sym = Symbol("Key1")

const jsuser = {
    name: "ABCD", // name is key(could be number, string) and "Awnish" is a string value which is contained by name key.key in object can contain any type of value either string or any datatype
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

//*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#
// we will know that how to declare objects with the help of constructor and how to make an object singleton

const tinderUser = new Object();// this is a singleton object  
// const tinderUser ={} // this is nonsingleton Object
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isloggedin = false

// console.log(tinderUser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        Username: {
            firstname: "Awnish",
            lastname: "Dubey"
        }
    }
}

// console.log(regularuser.fullname.Username)

const obj1 = {1: "a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}
const obj3 = {7:"a", 8:"b", 9:"c"}

//const obj4 = Object.assign({}, obj1, obj2, obj3)// Object.assign() will merge one ot more than one object as array we take 
const obj4 = {...obj1, ...obj2, ...obj3}// another method to merge objects using spread method(...O1, ....O2, ...On) mopst used method. 
console.log(obj4)

console.log(Object.keys(tinderUser));// returns Keys of the Object in Array datatype.
console.log(Object.values(tinderUser));// returns Values of the Object in Array datatype.
console.log(Object.entries(tinderUser));// every key values will become an array in a array[['key': 'Values'], ['Key': 'Values']]
console.log(tinderUser.hasOwnProperty('isloggedin'))// it findes that the value in the object exixts or not. (Objectname.hasOwnProperty('Key Of Object'))