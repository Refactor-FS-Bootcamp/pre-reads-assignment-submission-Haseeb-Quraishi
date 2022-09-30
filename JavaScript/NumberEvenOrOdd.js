function EvenOdd(num) {
    //var num = 20;
    if (num % 2 == 0) {
        console.log(num + " Even Number");
    } else {
        console.log(num + " Odd Number");
    }
}

function WithoutModulus(num) {
    var divide = parseInt(num / 2);
    if (divide*2 === num) {
        console.log(num+" is Even");
    } else {
        console.log(num+" is Odd");
    }
}

EvenOdd(20);
WithoutModulus(13);