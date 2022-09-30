function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j <= arr.length - 1; j++){
            if(arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

let arr = [3,4,2,5,9,6];
console.log(bubbleSort(arr));