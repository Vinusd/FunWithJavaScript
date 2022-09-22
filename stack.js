class Stack {
	#arr = [];
	#capacity;
	#top;

	constructor(size) {
		this.arr = new Array(size);
		this.capacity = size;
		this.top = -1;
	}

	push(item) {
		if (this.isFull()) {
			console.log("Stack Overflow: Cannot insert", item);
		} else {
			console.log("Inserting", item);
			this.arr[++this.top] = item;
		}
	}

	pop() {
		if (this.isEmpty()) {
			console.log("Stack Underflow");
		} else {
			console.log("Removing", this.arr[this.top]);
			return this.arr[this.top--];
		}
	}

	peek() {
		if (this.isEmpty()) {
			console.log("Stack Empty");
		} else {
			return this.arr[this.top];
		}
	}
	isFull() {
		return this.top == this.capacity - 1;
	}

	isEmpty() {
		return this.top == -1;
	}

	size() {
		return this.count;
	}

	display() {
		return this.arr;
	}
}

let myStack = new Stack(5);
myStack.push(3);
myStack.push(4);
myStack.push(6);
myStack.push(9);
myStack.push(0);
myStack.pop();
myStack.pop();

console.log("Stack", myStack.display());
console.log("Element at Top", myStack.peek());
console.log("Is Empty", myStack.isEmpty());
console.log("Is Full", myStack.isFull());
