function fibbo(number) {
    let a = 0, b = 1, c;
    console.log(a+" "+b+" ");
    for(let i = 0; i < number; i++){
        c = a+b;
        a = b;
        b = c;
        
        console.log(c);
    }
}

// function fibbo2(number) {
//     if(number === 0 || number === 1){
//         return number;
//     }

//     return fibbo2(number - 1) + fibbo2(number - 2);
// }

fibbo(10);
//console.log(fibbo2(6));