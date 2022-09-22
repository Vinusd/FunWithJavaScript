class Queue {
	#arr = [];
	#front;
	#rear;
	#capacity;
	#count;

	constructor(size) {
		this.arr = new Array(size);
		this.capacity = size;
		this.front = 0;
		this.rear = -1;
		this.count = 0;
	}

	// queue(size) {
	// 	arr = new Array(size);
	// 	capacity = size;
	// 	front = 0;
	// 	rear = -1;
	// 	count = 0;
	// }

	enqueue(item) {
		if (this.isFull()) {
			console.log("Overflow: Cannot insert", item);
		} else {
			console.log("Inserting", item);
			this.rear = (this.rear + 1) % this.capacity;
			this.arr[this.rear] = item;
			this.count++;
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			console.log("Underflow");
		} else {
			let x = this.arr[this.front];
			console.log("Deleting", x);
			this.front = (this.front + 1) % this.capacity;
			this.count--;
			return x;
		}
	}

	peek() {
		if (this.isEmpty()) {
			console.log("Underflow");
		} else {
			return this.arr[this.front];
		}
	}

	isFull() {
		return this.count == this.capacity;
	}

	isEmpty() {
		return this.count == 0;
	}

	size() {
		return this.count;
	}

	display() {
		return this.arr;
	}
}

let myQueue = new Queue(5);
myQueue.enqueue(2);
myQueue.enqueue(7);
myQueue.enqueue(9);
myQueue.enqueue(15);
myQueue.enqueue(6);
myQueue.enqueue(1);
console.log("Size", myQueue.size());
console.log("Display", myQueue.display());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log("Queue", myQueue.peek());
// console.log(
// 	`Queue ${myQueue.peek() === "undefined" ? "Empty" : myQueue.peek()}`
// );
console.log("Size", myQueue.size());
console.log("Display", myQueue.display());
