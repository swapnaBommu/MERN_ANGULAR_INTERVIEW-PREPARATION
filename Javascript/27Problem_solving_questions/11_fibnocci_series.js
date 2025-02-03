const fibonacciSeries = (num) => {
    if(num <=0){
        return [];
    }
    if(num===1){
        return [0];
    }
    let series = [0,1];

    for(let i=2;i<num;i++){
        series[i] = series[i-1] + series[i-2];
    }
    return series;
}

let fibSeries = fibonacciSeries(10);
console.log(fibSeries);

//time complexity =  O(n)
//space complexity = O(n)