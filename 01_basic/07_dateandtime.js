let mydate = new Date()
// console.log(typeof mydate) // Object 
// console.log(mydate) // It will return the current date and time.
// console.log(mydate.toLocaleString()) // It will return the current date and time both in local format.(MM/DD/YYYY, HH:MM:SS AM/PM)
// console.log(mydate.toString()) // It will return the current date and time in string format.
// console.log(mydate.toDateString())// it only returns date only not time included.
// console.log(mydate.toLocaleDateString())// it will return the date in local format.(MM/DD/YYYY)
// console.log(mydate.toJSON())// it will return the date in JSON format.(YYYY-MM-DDTHH:MM:SS.sssZ)
// console.log(mydate.toISOString())// it will return the date in ISO format.(YYYY-MM-DDTHH:MM:SS.sssZ)

let myCreateddate = new Date(2026, 0 ,10)// It will create a date object with the specified date. (YYYY, MM, DD) Note: Month is 0-indexed (0 = January, 1 = February, etc.)
console.log(myCreateddate.toDateString())

//**************************************Time*****************************************

let mytime = Date.now() // It will return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC.
console.log(mytime)
console.log(myCreateddate.getTime()) // It will return the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC for the specified date.
console.log(Math.floor(Date.now()/1000))// while doing Date.now()/1000 some tome it returns decimal value so we use Math.floor()to round it down to the nearest integer.


let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth() + 1) // It will return the month of the date object. (0-11) Note: Month is 0-indexed (0 = January, 1 = February, etc.) to get the correct month we add 1 to the result.
console.log(newdate.getDay()) // It will return the day of the week of the date object. (0-6) Note: Day is 0-indexed (0 = Sunday, 1 = Monday, etc.)

console.log(newdate.toLocaleString('Default', {
    weekday: 'long', // long, short, narrow
    year: 'numeric', // numeric, 2-digit
    month: 'long', // numeric, 2-digit, long, short, narrow
}))