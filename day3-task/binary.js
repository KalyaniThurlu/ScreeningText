class  Binary{
    #list=[];
    constructor(val){
        this.binaryConvert(val)
    }
    binaryConvert(val){
        let num=val;
        while(num > 0){
            let rem= num % 2
            this.push(rem)
            num=Math.floor(num / 2)

        }
    }
    
    push(rem){

        this.#list.push(rem)
    }print(){
        console.log(this.#list.reverse().join(''))
    }
}
for(let i = 1;i<=5;i++){
    let bin=new Binary(i)
    console.log(i)

    bin.print()
}


