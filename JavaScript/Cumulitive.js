function cumulitive(arr) {
    let arr1 = [];
    
    arr1[0] = arr[0];
    for(let i = 1; i <= arr.length-1; i++){
        arr1[i] = arr1[i-1] + arr[i];
    }
    arr1.forEach(element => {
       console.log(element); 
    });
}

let arr = [1,2,3,4];
cumulitive(arr);