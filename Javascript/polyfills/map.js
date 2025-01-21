//map syntax
// let newArr = arr.map(callback(currentVal,index,array));
//map function will take callback function as an argument
//this callback function will take three arguments --- current value, current index,arr


Array.prototype.myMap = function (cb) {
    //create new which need to return by our map method
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

let arr = [1,2,3];
let newArr = arr.myMap((e)=> {
    if(e > 1){
        return e;
    }
});
console.log(newArr);
