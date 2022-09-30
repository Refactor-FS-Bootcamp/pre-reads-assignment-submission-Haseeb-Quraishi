function C2F(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    //console.log(Math.floor(fahrenheit));
    console.log(Math.round((fahrenheit + Number.EPSILON) * 100) / 100);
}
C2F(37);