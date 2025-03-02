// How would you implement a calculator class with methods for addition,
// subtraction, and multiplication, supporting method chaining?
// calculator.add(3).multiply(4).subtract(5).getValue()

class calculator {
    constructor(initialValue = 0){
        this.number = initialValue;
    }

    add(num){
        this.number += num;
        return this;
    }
    multiply(num){
        this.number *= num;
        return this;
    }
    subtract(num){
        this.number -= num;
        return this;
    }
    getValue(){
        return this.number;
    }
}

const obj = new calculator(2);
// obj.add(3).multiply(4).subtract(5).getValue();
console.log(obj.add(3).multiply(4).subtract(5).getValue())