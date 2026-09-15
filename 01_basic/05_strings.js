const name = 'Awnish'
const repocount = 100

// console.log(name + repocount + " Value") (OLD METHOD TO CONCATENATE STRINGS AND VARIABLES OR ANY OTHER DATA TYPE)


/*new method*/console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`); // $ is used to access the variable or any other data type inside the string. This is called template literals or template strings. It is a new feature in ES6. It is used to create multi-line strings and to interpolate variables and expressions into strings.


// const gameName = new String(`hello my name is ${name.toUpperCase()} and my repo count is ${repocount}`) // new method to declare a string Variable.
// console.log(gameName);


//const gameName = `hellooworldd`
//let index = 5
//console.log(`${gameName} returns the character of index value, ${gameName.at(-6)}`);// at() method is used to return the character of the string at the specified index value. It can also be used to access the character of the string from the end of the string by using negative index value.


//console.log(`${gameName} returns the character of index value, ${gameName.charAt(index)}`); // charAt() method is used to return the character of the string at the specified index value. it cannot be used to access the character of the string from the end of the string by using negative index value.


// const icons = "☃★♲";
// console.log(icons.codePointAt(1)); //it returns the unicode value of the character at the specified index value.


console.log(name.indexOf('i')); // it is used to find the index value of anu character in string.
const str = name.substring(0, 4); // it is used to extract the characters from the string between the start and end index values. It does not include the character at the end index value.
console.log(str);



const anothermethod = name.slice(-4,4); // it is used to extract the characters from the string between the start and end index values. It does not include the character at the end index value. It can also be used to extract the characters from the end of the string by using negative index value.
console.log(anothermethod);

const str1 = "              Hii How are you?            "; // unwanted spaces are here 
console.log(str1)
console.log(str1.trim()) // unwanted spaces are removed using trim method,(.trimStart),(.trimEnd).

console.log(str1.split('-3', 3)); // it is used to split the string into an array of substrings based on the specified separator. It returns an array of substrings.

