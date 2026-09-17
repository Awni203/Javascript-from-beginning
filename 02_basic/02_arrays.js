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