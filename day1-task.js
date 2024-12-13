

//=== stack used in functions===
function Stack1(){
    this.colors=["blue","yellow","green","orange"]
this.push=function(color){
    return this.colors.push(color)
}
this.pop=function(){
    return this.colors.pop()
}
this.peek=function(){
    return this.colors[0]
}
this.size=function(){
    return this.colors.length
}
this.clear=function(){
    return this.colors.length=0
}
this.isEmpty=function(){
    return this.colors.isEmpty===0
}
this.print=function(){
    console.log(this.colors.toString())
}



}
let results=new Stack1()
results.push("block")
results.pop()
results.print()
console.log(results.size())
console.log(results.isEmpty())
console.log(results.clear())



//=== stack used in classes===

class Stack {
    constructor() {
        this.Arr = ["rama", "suma", "padhma", "geetha"]; 
    }

    
    push(x) {
        this.Arr.push(x); 
    }

   
    
    pop() {
        return this.Arr.pop(); 
    }


    peek() {
        return this.Arr[this.Arr.length - 1]; 
    }

    
    size() {
        return this.Arr.length; 
    }


    clear() {
        this.Arr.length = 0; 
    }

    isEmpty() {
        return this.Arr.length === 0; 
    }

    
    print() {
        console.log(this.Arr.toString());
    }
}


let obj = new Stack();
obj.push("a"); 
obj.print(); 
console.log("Popped element:", obj.pop()); 
console.log("Stack size after pop:", obj.size())
obj.clear(); 
console.log("Stack after clear:", obj.Arr);
console.log("Is stack empty?", obj.isEmpty()); 



    //===queue used in functions===
 
function Queue() {
    this.items = [1, 2, 3, 4, 5]; 
    
    this.shift = function() {
        return this.items.shift(); 
     
    };
    this.pop = function() {
        return this.items.pop(); 
  
    }
    this.peek = function() {
        return this.items[0]; 
    };
    this.size = function() {
        return this.items.length; 
    };

    this.clear = function() {
        this.items = []; 
    };
    this.print = function() {
        console.log(this.items.toString()); 
    };
}

let rst = new Queue();
rst.shift(); 

rst.print(); 

console.log(rst.peek());
console.log(rst.size()); 
rst.clear(); 
rst.print(); 

//===queue used in classes==

class Queue1{
    constructor(){
        this.Arr=[6,7,8,9,10]
    }
    shift(){
        return this.Arr.shift()
    }
    pop(){
        return this.Arr.pop()
    }
    peek(){
        return this.Arr[0]
    }
    size(){
        return this.Arr.length
    }
    clear(){
        return this.Arr=[]
    }
    print(){
        console.log(this.Arr.toString())
    }


}
let Rst=new Queue1()
Rst.shift()
Rst.print()
console.log(Rst.peek())
console.log(Rst.size())
console.log(Rst.pop())


