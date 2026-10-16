for (let i = 1; i <= 20; i++) {
    let j = 0;
    while (j * j < i) {
        j += 0.001;
    }
    console.log(`Square root of ${i} = ${j}`);
}