while (5===5) {
    // console.log("equal");
    break
}

//table from 1 to 20 using while loop
let i = 1;
while(i <= 20){
    let j = 1;
    while(j <= 10){
        console.log(`${i} * ${j} =  ${i*j}`)
        j++;   
    }
    i++;
}

// while loop on array

let Myarr = ['Flash', "Superman", "BatMan"];
let k = 0;
while(k < Myarr.length){
    console.log(`values of the arr is, ${Myarr[k]}`);
    k++;
}

//do while loop [before loops run then after condition is checked]
let Score = 1;
do{
    console.log(`score is ${Score}`)
    Score++
} while(Score <= 10)