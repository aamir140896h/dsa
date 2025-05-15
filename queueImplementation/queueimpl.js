// With array

class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(element) {
    this.item.push(element);
  }

  dequeue() {
    return this.item.shift();
  }

  isEmpty() {
    return this.item.length === 0;
  }

  peak() {
    if (this.isEmpty) {
      return this.item[0];
    }
    return null;
  }

  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peak());
console.log(queue.size());
