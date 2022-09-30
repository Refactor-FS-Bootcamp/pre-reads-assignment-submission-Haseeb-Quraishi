function factorial(number) {
    let fact = 1;
    for(let i = 1; i <= number; i++){
        fact = fact * i;
    }
    return fact;
}

function factorial2(number) {
    if(number <= 0){
        return 1;
    }

    return number*factorial2(number - 1);
}

console.log(factorial2(4));