function frequency(str,x) {
    let ccount = 0;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === x){
            ccount++;
        }
    }
    return ccount;
}

console.log(frequency("welcome",'e'));