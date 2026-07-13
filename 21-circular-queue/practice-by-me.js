class Queue{
    constructor(size){
    this.que=new Array(size);
    this.size=size;
    this.front=-1;
    this.rear=-1;
     }

     isFull(){
        return (this.front===0 && this.rear===this.size-1)  ||  (this.rear===(((this.front-1)+this.size) % this.size))
     }
     isEmpty(){
        return this.front===-1;
     }

     enqueue(item){
        if(this.isFull()){
           console.log("Queue is already full");
           return;
        }

        if(this.front===-1 && this.rear===-1){
            this.front=0
            this.rear=0
        }else{
           this.rear=[this.rear+1] % this.size
           
        }
        this.que[this.rear]=item;
        console.log(`item ${item} is enqueueed`)
     }


     dequeue(){
        if(this.isEmpty()){
            console.log("item is already empty");
            return;
        }
        
        console.log(`item ${this.que[this.front]} is dequed`);
        this.front=(this.front+1) % this.size;
        
       
     }

     displayQueue(){
        if(this.isEmpty()){
            console.log("item is already empty");
            return;
        }
        let i=this.front
        do {
            console.log(`item at index ${i} ${this.que[i]}`)
            i=(i+1) % this.size
        } while (i !== (this.rear+1) % this.size);

     }

     getRear(){
        console.log(`rear value at index ${this.rear} is ${this.que[this.rear]}`)
     }

     getFront(){
        console.log(`Front value at index ${this.front} is ${this.que[this.front]}`)
     }



}

let qu=new Queue(5);

qu.enqueue(10);
qu.enqueue(20);
qu.enqueue(30);
qu.enqueue(40);
qu.enqueue(50);
qu.displayQueue()
qu.dequeue()
qu.displayQueue()
qu.getFront()
qu.getRear()
qu.dequeue()
qu.getFront()
qu.getRear()
qu.dequeue()
qu.getFront()
qu.getRear()
qu.dequeue()
qu.getFront()
qu.getRear()
qu.enqueue(60)
qu.getFront()
qu.getRear()
qu.displayQueue()
