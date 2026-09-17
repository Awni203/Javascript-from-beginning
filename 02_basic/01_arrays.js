//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["saktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1])
// console.log(myArr2)

//Array methods

// myArr.push(6) //add element at the end of the array (myArr)
// myArr.pop() //remove last element from the array (myArr)

myArr.unshift(-1) //add element at the start of the array (myArr).
myArr.shift() //remove element from beginning of the array (myArr).
console.log(myArr)

// console.log(myArr.includes(9)) //check if the element is present in the array or not (myArr).
// console.log(myArr.indexOf(3)) //return the index of the element in the array (myArr).


const newArr = myArr.join()//convert array into string (myArr).
console.log(newArr)
console.log(typeof myArr) //object
console.log(typeof newArr) //string


// slice,splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 4) //return a new array from the original array (myArr).(.slice (start, end)) end is not included start index is included, we gave index value in slice method.
console.log(myn1)
console.log("B", myArr)
