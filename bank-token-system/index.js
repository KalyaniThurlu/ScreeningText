
export class queue{
    constructor(){
        this.collection=[];
    }
    enqueue(element){
        this.collection.push(element);
    }
    dequeue(){
        return this.collection.shift();
    }
    size(){
        return(this.collection.length);
    }
}