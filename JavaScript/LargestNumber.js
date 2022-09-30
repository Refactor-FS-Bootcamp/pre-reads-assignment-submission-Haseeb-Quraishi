function LargestNumber(a,b,c) {
    if (a > b && a > c) {
        return a;
    }
    else if(b > c){
        return b;
    }
    else{
        return c;
    }
}

console.log(LargestNumber(15,15,9));