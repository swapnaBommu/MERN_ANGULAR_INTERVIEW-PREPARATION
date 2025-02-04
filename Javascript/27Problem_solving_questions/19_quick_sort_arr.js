const swap = (arr, i, j)=>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const partition = (arr, start, end) => {
    let pivot = arr[start];
    let smallCount = 0;
    for(let i = start+1;i<arr.length;i++){
        if(arr[i] <= pivot){
            smallCount++;
        }
    }
    swap(arr,start,start+smallCount);
    let i= start;
    let j = end;
    while(i < j){
        if(arr[i] <= pivot){
            i++;
        }else if(arr[j] > pivot){
            j--;
        }else{
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return start+smallCount;
}

const quickSort =(arr, start,end)=>{
    if(start >= end){
        return;
    }

    let partitionIndex = partition(arr,start,end);
    quickSort(arr,start, partitionIndex-1);
    quickSort(arr,partitionIndex + 1, end);
}

const quicksort = (arr) =>{
    quickSort(arr,0, arr.length-1);
    return arr;
}


const unsortedArray = [5, 2, 9, 1, 3, 6];
const sortedArray = quicksort(unsortedArray);
console.log(sortedArray);