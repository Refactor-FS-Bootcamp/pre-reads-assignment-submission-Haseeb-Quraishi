function Prime(number) {
    let d = 2;
    if(number % d === 0)
        console.log("Not Prime");
    else
        console.log("Prime");
}

Prime(13);