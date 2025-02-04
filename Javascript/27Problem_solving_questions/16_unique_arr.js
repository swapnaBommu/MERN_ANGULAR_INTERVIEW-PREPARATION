function getUniqueArr(array){
    const uniqueArr = [];
    const seen = {};
    for(let i=0; i<=array.length-1;i++){
        const currentItem = array[i].name;
        if(!seen[currentItem]){
            uniqueArr.push(array[i]);
            seen[currentItem] = true;
        }
    }
    return uniqueArr;
}
      
let arr = [{name: "sai"},{name:"Nang"},{name: "sai"},
    {name:"Nang"},{name: "111111"}];
    console.log(getUniqueArr(arr))
    