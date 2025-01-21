//sytax for reduce method
//arr.reduce(callback(accumulator,currentVal, currentIndex,arr),initialVal);

Array.prototype.myReduce = function (cb,initialVal){
    let accumulator = initialVal;

    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
    }
    return accumulator;
}

let arr = [1,2,3,4]

const sum = arr.myReduce((acc,curr, i, arr) => {
    return acc + curr
},0);
console.log(sum)