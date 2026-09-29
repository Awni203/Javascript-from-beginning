// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5){
        // console.log("5 is best number")
    }
    // console.log(element);
    
}

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop value ${i}`);
    for(let j = 1; j<= 10; j++){
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`)// prints table from 1 to 10
    }
}

const myArray = ["Thor", "Ironman", "Captian America", "Natasha"]
// console.log(myArray.length)
for(let i = 0; i<myArray.length; i++){
    const element = myArray[i];
    // console.log(element)
}


// keyword break and continue:

for(let i = 1; i <= 20; i++){
    if(i === 5){
        console.log(`Detected ${i}`)
        break;
    }
    console.log(`Value of ${i} is ${i}`);
}


for(let i = 0; i <=10; i++){
    if(i === 5){
        console.log(`Detected ${i}`)
        continue;
    }
    console.log(`Value of ${i} is ${i}`);]
}

