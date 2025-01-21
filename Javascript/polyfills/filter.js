//filter syntax
// let newArr = arr.filter(callback(currentVal,index,array));
//filter function will take callback function as an argument
//this callback function will take three arguments --- current value, current index,arr


Array.prototype.myFilter = function (cb) {
    //create new which need to return by our filter method
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

let arr = [1,2,3];
let newArr = arr.myFilter((e)=> {
    if(e > 1){
        return e;
    }
});
console.log(newArr);
