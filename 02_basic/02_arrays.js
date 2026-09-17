const marvelheros = ["Thor", "Spiderman", "Ironman"]
const dcheros = ["Superman", "Batman", "Flash"];

// marvelheros.push(dcheros)// dcheros is taken as a 3rd element in marvelheros array and this push the array on existing array, it addd the second array as an element in first array.
// console.log(marvelheros);
// console.log(marvelheros[3][1])


// const allheros= marvelheros.concat(dcheros)// it concatinate both array and create a new array, it basically mergs both the array properly.
// console.log(allheros);

const allnewheros = [...marvelheros, ...dcheros]
console.log(allnewheros);

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realanotherarray = anotherarray.flat(Infinity)

console.log(realanotherarray);

console.log(Array.isArray("Awnish"))// to check is this a array or not
console.log(Array.from("Awnish"))// to form an array whiich is not an array, as in this "Awnish" is a string but using (Array.from("any datatype")) we can make this string an array. expected output = [ 'A', 'w', 'n', 'i', 's', 'h' ]


console.log(Array.from({name: "Awnish"})) // if from can not make an array it always gives output as an empty array. Expected output is [empty array]

const score1 = 100
const score2 = 200
const score3 = 300
const name = "Awnish"

console.log(Array.of(score1, score2, score3, name));// Array.of is used to combine more than one variables into array any datatype can be converted into array