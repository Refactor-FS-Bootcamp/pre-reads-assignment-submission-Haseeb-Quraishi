function quickSort(arr,start,end) {
    let pivot;
    if(start < end){
        pivot = partition(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
    }
}

function partition(arr, start, end){
    let pivot = arr[end];
    let i = start - 1;
    for (let j = 0; j <= end - 1; j++) {
        if(arr[j] < pivot){
            i = i + 1;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[end];
    arr[end] = temp;
    return i + 1;
}

let arr = [3,2,4,5];
quickSort(arr, 0, arr.length - 1);
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i] + " ");
// }
console.log(arr);