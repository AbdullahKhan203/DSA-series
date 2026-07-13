class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
        this.count = 0;
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }

    enqueue(item) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }

        if (this.isEmpty()) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = item;
        this.count++;
        console.log(`${item} enqueued to the queue`);
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }

        const item = this.queue[this.front];
        this.queue[this.front] = undefined;
        this.front = (this.front + 1) % this.size;
        this.count--;

        if (this.count === 0) {
            this.front = -1;
            this.rear = -1;
        }

        console.log(`${item} dequeued from the queue`);
        return item;
    }

    displayQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }

        console.log("Queue elements with indices:");
        let i = this.front;
        for (let step = 0; step < this.count; step++) {
            console.log(`Index: ${i}, Element: ${this.queue[i]}`);
            i = (i + 1) % this.size;
        }
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        console.log(`Front element: ${this.queue[this.front]}`);
        return this.queue[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        console.log(`Rear element: ${this.queue[this.rear]}`);
        return this.queue[this.rear];
    }
}




let qu=new CircularQueue(5);
qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
qu.enqueue(40)
qu.enqueue(50)
qu.displayQueue()
qu.dequeue()
qu.dequeue()
qu.displayQueue()
qu.enqueue(60)
qu.enqueue(70)
qu.displayQueue()
qu.dequeue()


qu.displayQueue()

qu.enqueue(80)
qu.displayQueue()
qu.getFront()
qu.getRear()