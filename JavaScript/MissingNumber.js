function missingNumber(arr) {
    let count = "";
    let k = 1;
    for(let i = 0; i < arr.length; i++){
        while(k != arr[i]){
            console.log(k);
            k++;
        }
        k++;
    }
    while(k <= arr[arr.length - 1]){
        console.log(k);
        k++;
    }
}

let arr = [1,2,4,5,9,13];
missingNumber(arr);