function sort(arr) {

    let key;

    for(let i = 1; i < arr.length; i++){
        key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }

    return arr;
}

var arr = [5,3,4,2,6];
console.log(sort(arr));